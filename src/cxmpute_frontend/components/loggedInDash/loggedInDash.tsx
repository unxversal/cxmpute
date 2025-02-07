import styles from './loggedInDash.module.css';
import * as React from 'react'
import { User } from '../../lib/types';
import { useState } from 'react';
import { cxmpute_backend } from '../../../declarations/cxmpute_backend';
import { Chain as ChainType } from '../../../declarations/cxmpute_backend/cxmpute_backend.did';
import { Chain } from '../../lib/types';

interface LoggedInDashProps {
    user: User,
    setPage: (page: string) => void,
    setUser: (user: User) => void
}

const chainMap: { [key: string]: ChainType } = {
  'icp': { 'icp': null },
  'polygonzkEVM': { 'polygonzkEVM': null },
  'metis': { 'metis': null },
  'aptos': { 'aptos': null },
  'velas': { 'velas': null },
  'bnbchain': { 'bnbchain': null },
  'starknet': { 'starknet': null },
  'aleo': { 'aleo': null },
  'lisk': { 'lisk': null },
  'moonbeam': { 'moonbeam': null },
  'avalanche': { 'avalanche': null },
  'roostock': { 'roostock': null },
  'linea': { 'linea': null },
  'cronos': { 'cronos': null },
  'polygonPOS': { 'polygonPOS': null },
  'cartesi': { 'cartesi': null },
  'vechain': { 'vechain': null },
};

const chainOptions = Object.keys(chainMap);

export default function LoggedInDash(user: LoggedInDashProps) {

    // Local state to control the chain-change UI
    const [isChangingChain, setIsChangingChain] = useState(false);
    const [newChain, setNewChain] = useState<string>('');

    // When the CHANGE CHAIN button is clicked, show the select dropdown
    const handleChangeChainClick = () => {
        setIsChangingChain(true);
    };

    function parseVariant<T extends string>(variantObj: Record<string, unknown>): T {
        return Object.keys(variantObj)[0] as T;
    }

    function motokoToFrontendUser(motokoUser: any): User {
        return {
          walletAddress: motokoUser.walletAddress,
          userID: motokoUser.userID,
          provider: motokoUser.provider,
          chain: parseVariant<Chain>(motokoUser.chain),         // {starknet: null} -> "starknet"
          cxmputeBalance: Number(motokoUser.cxmputeBalance),    // 0n -> 0
          totalStxrage: Number(motokoUser.totalStxrage),        // 0n -> 0
          stxres: (motokoUser.stxres || []).map((s: any) => ({
            file: { ID: s.file.ID, bucketID: s.file.bucketID },
            size: Number(s.size)
          })),
          pods: (motokoUser.pods || []).map((pod: any) => ({
            // Fill these out as needed, e.g.:
            name: pod.name,
            status: parseVariant<'deployed'|'deploying'|'undeployed'>(pod.status),
            // etc.
            // ...
            priceRange: (pod.priceRange || []).map((n: any) => Number(n))
          })),
          infxrenceConfig: {
            priceRange: (motokoUser.infxrenceConfig?.priceRange || []).map((n: any) => Number(n))
          }
        };
      }

    // Call the backend to update the user's chain and then update the UI.
    const handleConfirmChainChange = async () => {
        if (!newChain) return;
        try {
        // Call the backend; note that we convert the current chain and the new chain via chainMap.
        const result = await cxmpute_backend.changeUserChain(
            user.user.walletAddress,
            chainMap[user.user.chain],
            chainMap[newChain]
        );
        if (result) {
            console.log("Chain successfully updated to", newChain);
            // If your parent component manages the user state, call the callback with the new user data.
            const rawUser = await cxmpute_backend.getOrCreateUser(user.user.walletAddress, chainMap[newChain]);
            
            const user2: User = motokoToFrontendUser(rawUser);

            user.setUser(user2);
        } else {
            console.error("Chain update failed: user not found");
        }
        } catch (error) {
        console.error("Error updating chain:", error);
        }
        // Hide the chain-change UI after confirming
        setIsChangingChain(false);
    };


    const numberPods = user.user.pods.length;

    return (
        <div className={styles.loggedInDash}>
            <div className={styles.topTainers}>
                <div className={styles.topTainer}>
                    {!isChangingChain ? (<div className={styles.headerButtons}>
                                <button
                                    className={styles.headerButton}
                                    onClick={handleChangeChainClick}
                                >
                                    CHANGE CHAIN
                                </button>
                            </div>
                            ) : (
                            <div className={styles.headerButtons}>
                                <select
                                value={newChain}
                                onChange={(e) => setNewChain(e.target.value)}
                                className={styles.headerButtonSelect}
                                >
                                <option value="">Select new chain</option>
                                {chainOptions.map(
                                    (chain) =>
                                    chain !== user.user.chain && (
                                        <option key={chain} value={chain}>
                                        {chain.toUpperCase()}
                                        </option>
                                    )
                                )}
                                </select>
                                <button
                                className={styles.headerButton}
                                onClick={handleConfirmChainChange}
                                >
                                Confirm
                                </button>
                            </div>
                        )}
                    <div className={styles.bottom}>


                        <div className={styles.titletainer}>
                            <p className={styles.title}>{user.user.walletAddress}</p>
                            <h1>{user.user.chain.toUpperCase()}</h1>
                        </div>
                    </div>

                    


                </div>
                <div className={styles.topTainer}>
                    <div className={styles.headerButtons}>
                        <button className={styles.headerButton} onClick={() => user.setPage('myPods')}>GO TO MY PXDS</button>
                    </div>

                    <div className={styles.bottom}>
                        <img
                            src="/cube-scan.svg"
                            alt="My Pods icon"
                            style={{
                                width: '8vw',
                                height: '8vw',
                                marginRight: '8px',
                                marginLeft: 0,
                                marginBottom: 0,
                                filter: 'brightness(0) invert(1)',
                            }}
                        />
                        <p className={styles.title}>{numberPods} pxds</p>
                    </div>
                    
                    
                    
                </div>
            </div>
            <div className={styles.bottomTainers}>
                <div className={styles.bottomTainer}>
                    <div className={styles.headerButtons}>
                        <button className={styles.headerButton}>ADD CXMPUTE</button>
                    </div>
                    <div className={styles.bottom}>
                        <img
                            src="/dollar-circle.svg"
                            alt="My Pods icon"
                            style={{
                                width: '8vw',
                                height: '8vw',
                                marginRight: '8px',
                                marginLeft: 0,
                                marginBottom: 0,
                                filter: 'brightness(0) invert(1)',
                            }}
                        />
                        <div className={styles.titletainer}>
                            <p>CXMPUTE CREDITS</p>
                            <h1 className={styles.title}>{user.user.cxmputeBalance}</h1>
                            
                        </div>
                        
                    </div>
                </div>
                <div className={styles.bottomTainer}>
                    <div className={styles.headerButtons}>
                        <button className={styles.headerButton} onClick={() => user.setPage('stxrage')}>GO TO STXRAGE</button>
                    </div>

                    <div className={styles.bottom}>
                        <img
                            src="/database.svg"
                            alt="My Pods icon"
                            style={{
                                width: '8vw',
                                height: '8vw',
                                marginRight: '8px',
                                marginLeft: 0,
                                filter: 'brightness(0) invert(1)',
                                marginBottom: 0,
                            }}
                        />
                        <div className={styles.titletainer}>
                            <p>STXRAGE USED (GiB)</p>
                            <h1 className={styles.title}>{user.user.totalStxrage}</h1>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}