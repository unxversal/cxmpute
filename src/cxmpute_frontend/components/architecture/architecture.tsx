import styles from './architecture.module.css';
import * as React from 'react';

export function Architecture() {
    return (
        <div className={styles.architecture}>
            <div className={styles.processText}>
                <h1 className={styles.processText2}>Cxmpute Architecture</h1>
                <button className={styles.processButton} onClick={() => window.open('https://www.joshuaokolo.xyz/blog/cxmputearchitecture', '_blank')}>
                    Learn More About Cxmpute Architecture
                </button>
            </div>
            <div className={styles.architectureContainer}>
                <div className={styles.architectureStep}>
                    <h2>Cxmpute App</h2>
                    <p>
                        The central hub for all user interactions—providing a seamless interface for accessing services, managing compute workloads, and deploying AI models. The app combines an intuitive UI with powerful APIs, allowing both beginners and experts to leverage Cxmpute’s decentralized computing network effortlessly.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Financial Layer</h2>
                    <p>
                        The financial backbone of Cxmpute, designed for flexibility and accessibility. It supports both fiat payments (via Stripe) and stabletokens across popular blockchains, ensuring seamless, cross-chain compatibility. This layer handles transactions, pricing, staking, and rewards—enabling providers and users to engage in a transparent and efficient marketplace.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Orchestration Network</h2>
                    <p>
                        The coordination layer that routes and manages network requests. It matches users with the most suitable compute providers based on pricing, hardware requirements, and availability. This layer also ensures that services such as serverless compute, AI inference, and distributed training run smoothly across the decentralized network.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Decentralized Cxmpute Network</h2>
                    <p>
                        The heart of the platform—Cxmpute’s decentralized infrastructure connects a global network of providers. From running AI inference to hosting serverless applications, this network delivers scalable, distributed computing power securely and efficiently. Every participant contributes to the network’s resilience while earning rewards for providing valuable resources.
                    </p>
                </div>
            </div>
        </div>
    );
}
