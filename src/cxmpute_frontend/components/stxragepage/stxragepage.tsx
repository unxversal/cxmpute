import styles from './stxragepage.module.css';
import * as React from 'react';
import { User } from '../../lib/types';

interface PodsPageParams{
    user?: User;
}

export default function StxragePage({ user }: PodsPageParams) {
    return (
        <div className={styles.podspage}>
            <div className={styles.header}>
                <div className={styles.title}>STXRAGE</div>
                <button className={styles.createPod}>UPLOAD FILE</button>  
            </div>
            <div className={styles.pods}>
                {user?.stxres.map((stxre) => (
                    <div className={styles.pod}>
                        <div className={styles.podName}>
                            <img
                                src="/cube-dots.svg"
                                alt="My Pods icon"
                                style={{
                                    width: '5vw',
                                    height: '5vw',
                                    marginRight: '8px',
                                    marginLeft: 0,
                                    marginBottom: 0,
                                    filter: 'brightness(0) invert(1)',
                                }}
                            />
                            {stxre.file.ID}</div>
                        <div className={styles.podPrice}>
                            <div className={styles.priceRange}>{stxre.size} GB</div>
                            <div className={styles.togglePodDeployment}>DELETE</div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};