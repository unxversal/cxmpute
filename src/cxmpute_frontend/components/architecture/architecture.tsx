import styles from './architecture.module.css';
import * as React from 'react';

export function Architecture() {
    return (
        <div className={styles.architecture}>
            <div className={styles.processText}>
                <h1 className={styles.processText2}>Cxmpute Architecture</h1>
                <button className={styles.processButton} onClick={() => window.open('https://www.joshuaokolo.xyz/blog/cxmputearchitecture', '_blank')}>
                    Learn More About the Cxmpute Protocol Architecture
                </button>
            </div>
            <div className={styles.architectureContainer}>
                <div className={styles.architectureStep}>
                    <h2>Cxmpute App</h2>
                    <p>
                        The main hub for users to access services, manage workloads, and deploy AI models. It offers a simple interface and powerful APIs, making it easy for anyone to leverage Cxmpute’s decentralized computing.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Financial Layer</h2>
                    <p>
                        This layer handles payments, staking, and rewards. It supports both fiat and stabletokens from major blockchains, allowing for seamless, cross-chain transactions.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Orchestration Network Layer</h2>
                    <p>
                        Manages requests and matches users with the best providers based on pricing, hardware, and availability. It ensures smooth operation of services like serverless compute, AI inference, and distributed training.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Provider Network Layer</h2>
                    <p>
                        The core of Cxmpute’s infrastructure. This global network provides scalable, secure computing power for AI inference, serverless apps, and distributed workloads. Providers earn rewards by sharing their resources.
                    </p>
                </div>
            </div>
        </div>
    );
}
