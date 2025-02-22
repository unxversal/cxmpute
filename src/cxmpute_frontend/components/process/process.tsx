import styles from './process.module.css';
import * as React from 'react';

const Process = () => {
    return (
        <div className={styles.process} id="process">
            
            <div className={styles.processText}>
                <h1 className={styles.processText}>How It Works</h1>
                <button className={styles.processButton}>Get Started as a User</button>
                <button className={styles.processButton}>Get Started as a Provider</button>
            </div>
            <div className={styles.processContainer}>
                <h1>For Users</h1>
                <div className={styles.processStep}>
                    <h2>Step 1</h2>
                    <p>Create an account and load credits. Cxmpute accepts fiat and cryptocurrencies.</p>
                </div>
                <div className={styles.processStep}>
                    <h2>Step 2</h2>
                    <p>Read the docs to learn how to use Cxmpute.</p>
                </div>
                <div className={styles.processStep}>
                    <h2>Step 3</h2>
                    <p>Start developing and innovating!</p>
                </div>
                <div className={styles.processStep}>
                    <h2>Step 4 (Optional)</h2>
                    <p>Buy CXPT tokens and earn rewards and a share of protocol fees.</p>
                </div>
            </div>
            <div className={styles.processContainer}>
                <h1>For Providers</h1>
                <div className={styles.processStep}>
                    <h2>Step 1</h2>
                    <p>Register on Cxmpute.xyz</p>
                </div>
                <div className={styles.processStep}>
                    <h2>Step 2</h2>
                    <p>Download the Provider Desktop software.</p>
                </div>
                <div className={styles.processStep}>
                    <h2>Step 3</h2>
                    <p>Complete system diagnostics and provider onboarding.</p>
                </div>
                <div className={styles.processStep}>
                    <h2>Step 4</h2>
                    <p>Stake CXPT tokens and start earning from your provisions!</p>
                </div>
            </div>
        </div>
    );
};

export default Process;