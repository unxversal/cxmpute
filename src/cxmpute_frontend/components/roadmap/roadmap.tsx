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
                        Recruit and onboard compute providers to build a robust, globally distributed compute network. Empower individuals and enterprises to monetize idle resources.
                    </p>
                    <button className={styles.processButton} onClick={() => window.open('https://tally.so/r/mKW2lk', '_blank')}>
                        Join as a Provider
                    </button>
                </div>
                <div className={styles.architectureStep}>
                    <h2>User Engagement</h2>
                    <p>
                        Attract and engage users by creating a vibrant, demand-driven ecosystem. Make Cxmpute accessible and valuable for developers, AI researchers, and enterprises.
                    </p>
                    <button className={styles.processButton} onClick={() => window.open('https://tally.so/r/w86DQY', '_blank')}>
                        Get Involved as a User
                    </button>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Software Development</h2>
                    <p>
                        Finalize and optimize our platform software for seamless integration, high performance, and smooth operation. Refine APIs, user interfaces, and provider tools.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Closed Beta Launch</h2>
                    <p>
                        Launch a closed beta to test performance, security, and user experience. Use feedback from early participants to guide improvements.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Public Mainnet Launch</h2>
                    <p>
                        Officially roll out the Cxmpute mainnet, making decentralized compute services widely available. This launch marks the beginning of a new era in distributed computing.
                    </p>
                </div>
                <div className={styles.architectureStep}>
                    <h2>Future Expansion</h2>
                    <p>
                        Expand service offerings, strengthen security protocols, and build strategic partnerships. Use community feedback and decentralized governance to guide development.
                    </p>
                </div>
            </div>
        </div>
    );
}
