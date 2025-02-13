import styles from './loggedInDash.module.css';
import * as React from 'react'
import { User } from '../../lib/types';
import { useState } from 'react';
import { cxmpute_backend } from '../../../declarations/cxmpute_backend';
import { Chain as ChainType } from '../../../declarations/cxmpute_backend/cxmpute_backend.did';
import { Chain, chainData } from '../../lib/types';
import { ethers } from 'ethers';
import { idlFactory } from '../../lib/idlFactory'; // <-- import your ICRC DID here
import { Principal } from '@dfinity/principal';

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

    async function transferTokens(
        chain: string,
        recipientAddress: string,
        amount: string // amount as a string (e.g. "10.5")
      ): Promise<void> {
        // --- NEW: Handle ICP transfers via Plug wallet ---
        if (chain === 'icp') {
          // Define your ICP token canister ID (replace with your actual canister ID)
          const ICRC_TOKEN_CANISTER_ID = 'xxxx-xxxx-xxxx-xxxxx-cai';
          
          // Check if the Plug wallet is installed
          if (!(window as any).ic || !(window as any).ic.plug) {
            console.error("Plug wallet not installed!");
            return;
          }
          
          try {
            // Check if Plug is already connected; if not, request connection
            const isConnected = await (window as any).ic.plug.isConnected();
            if (!isConnected) {
              await (window as any).ic.plug.requestConnect({
                whitelist: [ICRC_TOKEN_CANISTER_ID],
              });
            }
            
            // Create an actor for your ICRC token canister using the provided idlFactory
            const actor = await (window as any).ic.plug.createActor({
              canisterId: ICRC_TOKEN_CANISTER_ID,
              interfaceFactory: idlFactory,
            });
            
            // Build the transfer argument. Adjust fields as required by your ICRC implementation.
            const transferArg = {
              from_subaccount: [], // or specify a subaccount, if needed
              to: {
                owner: Principal.fromText(recipientAddress),
                subaccount: [],
              },
              fee: [],
              created_at_time: [],
              memo: [],
              amount: BigInt(amount), // Make sure the string represents an integer amount (in the token's base unit)
            };
            
            // Execute the transfer via Plug
            const result = await actor.transfer(transferArg);
            
            if ('Ok' in result) {
              console.log(`Transfer successful! Block height: ${result.Ok}`);
            } else if ('Err' in result) {
              console.error(`Transfer failed: ${JSON.stringify(result.Err)}`);
            } else {
              console.error("Unknown response received from canister.");
            }
          } catch (error: any) {
            console.error("ICP token transfer failed:", error.message);
          }
          // End the function here for ICP
          return;
        }
        
        // --- EXISTING Ethers-based transfer for non-ICP chains ---
        const { chainID, tokenAddress, erc20abi } = chainData[chain];
        
        // Check if Metamask (or another Ethereum provider) is available
        if (!(window as any).ethereum) {
          console.error("Metamask is not installed!");
          return;
        }
        
        // Create an ethers provider and signer
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const signer = await provider.getSigner();
        
        // Check current chain and request a switch if necessary
        const currentChainId = await (window as any).ethereum.request({ method: 'eth_chainId' });
        if (currentChainId.toLowerCase() !== chainID.toLowerCase()) {
          try {
            await (window as any).ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: chainID }],
            });
            console.log(`Switched to chain ${chain}`);
          } catch (switchError) {
            console.error("Error switching chain:", switchError);
            return;
          }
        }
        
        // Create a contract instance for the token using its ABI
        const tokenContract = new ethers.Contract(tokenAddress, JSON.parse(erc20abi!), signer);
        
        // Convert the amount to the token's smallest unit (assuming 18 decimals)
        const parsedAmount = ethers.parseUnits(amount, 18);
        
        // Call the transfer function on the token contract
        try {
          const tx = await tokenContract.transfer(recipientAddress, parsedAmount);
          console.log("Transaction submitted, hash:", tx.hash);
          await tx.wait();
          console.log("Transaction confirmed, hash:", tx.hash);
        } catch (error) {
          console.error("Token transfer failed:", error);
        }
    }
      


    const numberPods = user.user.pods.length;

    return (
        <div className={styles.loggedInDash}>
            <div className={styles.topTainers}>
                <div className={styles.topTainer}>
                    {!isChangingChain ? (<div className={styles.headerButtons}>
                                <button
                                    className={styles.headerButton}
                                    // onClick={handleChangeChainClick}
                                >
                                    DISCONNECT WALLET
                                </button>
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
                                //onClick={handleConfirmChainChange}
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