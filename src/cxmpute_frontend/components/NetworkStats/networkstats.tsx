import styles from './networkstats.module.css';
import * as React from 'react';

interface NetworkStat{
    title: string;
    subtitle: string;
    value: number;
}

export function NetworkStats() {
    return (
        <div className={styles.networkstats}>
            <h1>Network Stats</h1>
        </div>
    );
}