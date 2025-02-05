import styles from './dashboard.module.css';
import * as React from 'react'
import { Cobe } from '../cobe/cobe';

export default function Dashboard() {
    return (
        <div
            style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 200,
            }} 
            className={styles.dashboard}>
               <div className={styles.leftMenu}>
                    <ul 
                        className={styles.menuList}>
                        <li>Home</li>
                        <li>Settings</li>
                    </ul>
               </div>
               <div className={styles.rightContent}>
                    <h1>Dashboard</h1>
                    <Cobe />
               </div>
        </div>
    );
};