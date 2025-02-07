import styles from './podspage.module.css';
import * as React from 'react';
import { User } from '../../lib/types';

interface PodsPageParams{
    user?: User;
}

export default function PodsPage({ user }: PodsPageParams) {
    return (
        <div className={styles.podspage}>
            <div className={styles.header}>
                <div className={styles.title}>YOUR PXDS</div>
                <button className={styles.createPod}>CREATE A POD</button>  
            </div>
            <div className={styles.pods}>
                {user?.pods.map((pod) => (
                    <div className={styles.pod}>
                        <div className={styles.podName}>
                            <img
                                src="/cube-scan.svg"
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
                            {pod.name}</div>
                        <div className={styles.podPrice}>
                            <div className={styles.priceRange}>${pod.priceRange[0]/10} - ${pod.priceRange[1]/10 }</div>
                            <div className={styles.togglePodDeployment}>{pod.status === 'deployed' && 'UNDEPLOY PXD'}{pod.status !== 'deployed' && 'DEPLOY PXD'}</div>
                        </div>


                        <div className={styles.podFooter}>
                            <div className={styles.podType}>{pod.type.toUpperCase()}</div>
                                {pod.status === 'deployed' && <div className={styles.statusDeployed}>DEPLOYED</div>}
                                {pod.status === 'deploying' && <div className={styles.statusDeploying}>DEPLOYING</div>}
                                {pod.status === 'undeployed' && <div className={styles.statusUndeployed}>UNDEPLOYED</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};