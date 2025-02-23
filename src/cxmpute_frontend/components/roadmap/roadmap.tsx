import styles from './roadmap.module.css';
import * as React from 'react';

export default function Roadmap() {
    return (
        <div className={styles.architecture} id="roadmap">
            <div className={styles.processText}>
                <h1 className={styles.processText2}>Cxmpute Roadmap & Future Work</h1>
                {/* <button className={styles.processButton} onClick={() => window.open('https://www.joshuaokolo.xyz/blog/cxmputearchitecture', '_blank')}>
                    Learn More About the Cxmpute Protocol Architecture
                </button>
                <button className={styles.processButton} onClick={() => window.open('https://www.joshuaokolo.xyz/blog/cxmputearchitecture', '_blank')}>
                    Learn More About the Cxmpute Protocol Architecture
                </button> */}
            </div>
            <div className={styles.architectureContainer}>
                <div className={styles.architectureStep}>
                    <h2>Provider Onboarding</h2>
                    <p>
                        Aggressively recruit and onboard compute providers to build a robust, globally distributed compute network. Our goal is to empower individuals and enterprises to monetize idle resources and contribute to a decentralized future.
                    </p>
                    <button className={styles.processButton} onClick={() => window.open('https://tally.so/r/mKW2lk', '_blank')}>
                        Join as a Provider
                    </button>
                </div>
                <div className={styles.architectureStep}>
                    <h2>User Engagement</h2>
                    <p>
                        Simultaneously attract and engage users by creating a vibrant, demand-driven ecosystem. We’re focused on making Cxmpute accessible and valuable for developers, AI researchers, and enterprises in need of decentralized compute power.
                    </p>
                    <button className={styles.processButton} onClick={() => window.open('https://tally.so/r/w86DQY', '_blank')}>
                        Get Involved as a User
                    </button>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Software Development</h2>
                    <p>
                        Finalize and optimize our platform software to ensure seamless integration, high performance, and smooth operation across the network. This includes refining APIs, user interfaces, and provider tools.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Closed Beta Launch</h2>
                    <p>
                        Launch a closed beta to rigorously test performance, security, and user experience. Feedback from early participants will guide improvements ahead of our full-scale deployment.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Public Mainnet Launch</h2>
                    <p>
                        Officially roll out the Cxmpute mainnet, making our decentralized compute services widely available. This launch will mark the beginning of a new era in distributed computing, driven by user participation and provider contributions.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Future Expansion</h2>
                    <p>
                        As we grow, we’ll expand our service offerings, strengthen security protocols, and build strategic partnerships. Community feedback and decentralized governance will guide our development and help shape the future of Cxmpute.
                    </p>
                </div>
            </div>
        </div>
    );
}
