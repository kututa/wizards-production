"use client";

import React, { useEffect, useState } from 'react';
import styles from './ConnectWallet.module.scss';

declare global {
  interface EthereumProvider {
    request?: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
    on?: (event: string, handler: (...args: unknown[]) => void) => void;
    removeListener?: (event: string, handler: (...args: unknown[]) => void) => void;
  }

  interface Window {
    ethereum?: EthereumProvider;
  }
}

const ConnectWallet: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const eth = window.ethereum;
    if (!eth) return;

    const handleAccounts = (...args: unknown[]) => {
      const accounts = args[0] as string[] | undefined;
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
        setError(null);
      } else {
        setAccount(null);
      }
    };

    const handleDisconnect = () => {
      setAccount(null);
    };

    if (eth.on) {
      eth.on('accountsChanged', handleAccounts);
      eth.on('disconnect', handleDisconnect);
    }

    // optionally populate current accounts
    (async () => {
      try {
        const accounts = await eth.request?.({ method: 'eth_accounts' }) as unknown;
        // request returns unknown, narrow to string[] when present
        if (Array.isArray(accounts)) {
          handleAccounts(accounts as string[]);
        }
      } catch {
        // ignore
      }
    })();

    return () => {
      if (eth.removeListener) {
        eth.removeListener('accountsChanged', handleAccounts);
        eth.removeListener('disconnect', handleDisconnect);
      }
    };
  }, []);

  const connect = async () => {
    setLoading(true);
    setError(null);
    try {
      if (typeof window === 'undefined' || !window.ethereum) {
        setError('No Ethereum provider found. Install MetaMask.');
        setLoading(false);
        return;
      }

      // Recommended: use eth_requestAccounts
      const accounts = await window.ethereum.request?.({ method: 'eth_requestAccounts' }) as unknown;
      if (Array.isArray(accounts) && accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setError('No account returned from wallet.');
      }
    } catch (err: unknown) {
      // Handle common user rejection
      const e = err as { code?: number; message?: string };
      if (e?.code === 4001) {
        setError('Connection request rejected by user.');
      } else {
        setError(e?.message ?? String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  const disconnect = () => {
    setAccount(null);
    setError(null);
  };

  return (
    <div className={styles.wrapper}>
      {account ? (
        <div className={styles.connected}>
          <span className={styles.dot} />
          <span className={styles.account}>{account.slice(0, 6)}...{account.slice(-4)}</span>
          <button className={styles.disconnect} onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <div className={styles.actions}>
          <button className={styles.connect} onClick={connect} disabled={loading}>
            {loading ? 'Connecting...' : 'Connect Wallet'}
          </button>
          {error && <div className={styles.error}>{error}</div>}
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
