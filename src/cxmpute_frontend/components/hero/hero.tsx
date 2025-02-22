import Spiral from '../3dspiral/3dspiral';
import { Cobe } from '../cobe/cobe';
import DecryptedText from '../decryptedText/decryptedText';
import styles from './hero.module.css';
import * as React from 'react';
import { useState } from 'react';

type HeroProps = {
    toggleDashboard: () => void;
};

export default function Hero({ toggleDashboard }: HeroProps) {

    const [selectedIdentity, setSelectedIdentity] = useState('');
    
    return (
        <div className={styles.hero} >
                <div className={styles.left}>
                    <h1 className={styles.description}>{selectedIdentity === '' ? 'I am a: ' : selectedIdentity} </h1>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Who is Cxmpute for?</h1>
                        <div className={styles.subtitle}>Cxmpute empowers both users and providers to unlock the full potential of decentralized computing. Whether you're harnessing global compute resources to develop cutting-edge AI models, running intensive workloads, or simply looking to monetize idle resources, Cxmpute is built for you.</div>
                    </div>
                </div>
                <div className={styles.right}>
                    {selectedIdentity==='' &&
                        (
                        <>
                            <button className={styles.button} onClick={() => setSelectedIdentity('Developer')}>Developer</button>
                            <button className={styles.button} onClick={() => setSelectedIdentity('ML Engineer')}>ML Engineer</button>
                            <button className={styles.button} onClick={() => setSelectedIdentity('Individual')}>Individual Compute Provider</button>
                            <button className={styles.button} onClick={() => setSelectedIdentity('Enterprise')}>Enterprise Compute Provider</button>
                        </>
                        )
                    }  
                    { selectedIdentity === 'Developer' && (
                        <div className={styles.popup}>
                            <h1 className={styles.title}>Developer</h1>
                            <div className={styles.subtitle}>
                                Access flexible, decentralized infrastructure to build, test, and deploy faster—without the limitations of traditional cloud services.
                            </div>
                            <button className={styles.button2}>Learn More & Get Started</button>
                            <button className={styles.button2} onClick={() => setSelectedIdentity('')}>Back</button>
                        </div>
                    )}
                    { selectedIdentity === 'ML Engineer' && (
                        <div className={styles.popup}>
                            <h1 className={styles.title}>ML Engineer</h1>
                            <div className={styles.subtitle}>
                                Train and run AI models at scale using cost-efficient in a familiar Jupyter Environment, with globally distributed compute resources designed for scale, performance, and reliability.
                            </div>
                            <button className={styles.button2}>Learn More & Get Started</button>
                            <button className={styles.button2}>See Example Notebooks</button>
                            <button className={styles.button2} onClick={() => setSelectedIdentity('')}>Back</button>
                        </div>
                    )}
                    { selectedIdentity === 'Individual' && (
                        <div className={styles.popup}>
                            <h1 className={styles.title}>Individual Compute Provider</h1>
                            <div className={styles.subtitle}>
                                Monetize your idle computer resources by contributing to a decentralized network—and get rewarded for your unused power.
                            </div>
                            <button className={styles.button2}>Learn More & Get Started</button>
                            <button className={styles.button2} onClick={() => setSelectedIdentity('')}>Back</button>
                        </div>
                    )}
                    { selectedIdentity === 'Enterprise' && (
                        <div className={styles.popup}>
                            <h1 className={styles.title}>Enterprise Compute Provider</h1>
                            <div className={styles.subtitle}>
                                Maximize the ROI of your infrastructure by offering your datacenter capacity to a global marketplace for decentralized compute.
                            </div>
                            <button className={styles.button2}>Learn More & Get Started</button>
                            <button className={styles.button2} onClick={() => setSelectedIdentity('')}>Back</button>
                        </div>
                    )}
                </div>
            <div className={styles.middle}></div>
        </div>
    );
};