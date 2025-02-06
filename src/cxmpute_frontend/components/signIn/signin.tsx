import styles from './signin.module.css';
import * as React from 'react';
import DecryptedText from '../decryptedText/decryptedText';
import { ethers } from "ethers";
import { cxmpute_backend } from '../../../declarations/cxmpute_backend';
import { Chain } from '../../../declarations/cxmpute_backend/cxmpute_backend.did';

const chainMap: { [key: string]: Chain } = {
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

interface SigninProps {
    selectedChain: string;
    setSelectedChain: React.Dispatch<React.SetStateAction<string>>;
    onWalletConnected?: (user: any) => void;
}

export default function SignIn({ 
    selectedChain, 
    setSelectedChain,
    onWalletConnected
}: SigninProps) {


    const handleConnectWallet = async () => {
        try {
          if (selectedChain === "icp") {
            // -----------------------------------
            // 1. ICP FLOW (PLUG WALLET)
            // -----------------------------------
            if ((window as any).ic.plug) {

              let address

              try {
                address = await (window as any).ic.plug.requestConnect();
                console.log(`The connected user's public key is:`, address);
              } catch (e) {
                console.log(e);
              }

            //   const principal = await (window as any).plug.agent.getPrincipal();
            //   const walletAddress = principal.toText(); 
              
              const selectedChainString = chainMap['icp'];
              // Make the backend call
              const user = await cxmpute_backend.getOrCreateUser(address, selectedChainString);
              onWalletConnected?.(user);
            } else {
              console.error("Plug wallet not found. Please install Plug for ICP.");
            }
          } else {
            // -----------------------------------
            // 2. EVM FLOW (METAMASK or other)
            // -----------------------------------
            // For EVM-based chains like Metis, Lisk, Avalanche, etc.,
            // we attempt to connect to MetaMask.
            if ((window as any).ethereum) {
              // Request account access
              await (window as any).ethereum.request({ method: "eth_requestAccounts" });
              
              // Use ethers to get the provider & signer
              const provider = new ethers.BrowserProvider((window as any).ethereum);
              const signer = await provider.getSigner();
              const walletAddress = await signer.getAddress();
              
              console.log("MetaMask wallet address:", walletAddress);

              const selectedChainString = chainMap[selectedChain];
    
              // Now call your backend
              // Note: selectedChain must match one of your Motoko variants
              const user = await cxmpute_backend.getOrCreateUser(walletAddress, selectedChainString);
              onWalletConnected?.(user);
            } else {
              console.error("MetaMask not found. Please install MetaMask for EVM chains.");
            }
          }
        } catch (error) {
          console.error("Error connecting wallet:", error);
        }
      };
    

    return (
        <div className={styles.menuList}>
            <div className={styles.signIn}>
                <h1>Sign In</h1>
                <p>Select your chain from the dropdown</p>
                <select onChange={(e) => setSelectedChain(e.target.value)}>
                    <option value="icp">Internet Computer</option>
                    <option value="metis">Metis</option>
                    <option value="lisk">Lisk</option>
                    <option value="roostock">Roostock</option>
                    <option value="cronos">Cronos</option>
                    <option value="starknet">Starknet</option>
                    <option value="bnbchain">BNBChain</option>
                    <option value="avalanche">Avalanche</option>
                    <option value="moonbeam">Moonbeam</option>
                    <option value="velas">Velas</option>
                    <option value="aleo">Aleo</option>
                    <option value="polygonzkEVM">Polygon zkEVM</option>
                    <option value="polygonPOS">Polygon POS</option>
                    <option value="cronos">Cronos</option>
                    <option value="vechain">VeChain</option>
                    <option value="aptos">Aptos</option>
                    <option value="linea">Linea</option>
                </select>

                {selectedChain && <button onClick={handleConnectWallet}>
                    <DecryptedText 
                        text="CONNECT WALLET" 
                        className="revealedButton"
                        encryptedClassName="encryptedButton"
                    />
                </button>}
            </div>
        </div>
    );
}