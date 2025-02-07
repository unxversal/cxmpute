import styles from './signin.module.css';
import * as React from 'react';
import DecryptedText from '../decryptedText/decryptedText';
import { ethers } from "ethers";
import { cxmpute_backend } from '../../../declarations/cxmpute_backend';
import { Chain as ChainType } from '../../../declarations/cxmpute_backend/cxmpute_backend.did';

type Chain = 
    'icp' | 
    'metis' |
    'lisk' |
    'roostock' |
    'cronos' |
    'starknet' |
    'bnbchain' |
    'avalanche' |
    'moonbeam' |
    'velas' |
    'aleo' |
    'polygonzkEVM' |
    'polygonPOS' |
    'vechain' |
    'aptos' |
    'linea'

type Model = 'meta-llama/Llama-3.3-70B-Instruct' |
    'meta-llama/Llama-3.2-11B-Vision-Instruct' |
    'meta-llama/Llama-3.2-90B-Vision-Instruct' |
    'meta-llama/Llama-3.1-8B-Instruct' |
    'meta-llama/Llama-3.2-3B-Instruct' |
    'deepseek-ai/DeepSeek-R1' |
    'deepseek-ai/DeepSeek-V3' |
    'meta-llama/Llama-3.1-405B-Instruct' |
    'microsoft/Phi-3.5-MoE-instruct' |
    'microsoft/Phi-3.5-vision-instruct' |
    'mistralai/Mistral-Small-24B-Instruct-2501' |
    'mistralai/Pixtral-12B-2409' |
    'mistralai/Mistral-Nemo-Instruct-2407' |
    'mistralai/Mixtral-8x7B-Instruct-v0.1' |
    'mistralai/Mistral-7B-Instruct-v0.3' |
    'Qwen/Qwen2.5-VL-3B-Instruct' |
    'Qwen/Qwen2.5-VL-7B-Instruct' |
    'Qwen/Qwen2.5-VL-72B-Instruct' |
    'Qwen/Qwen2.5-7B-Instruct-1M' |
    'Qwen/Qwen2.5-14B-Instruct-1M' |
    'Qwen/QwQ-32B-Preview' |
    'Qwen/QVQ-72B-Preview' |
    'Qwen/Qwen2.5-Coder-32B-Instruct' |
    'Qwen/Qwen2.5-Coder-14B-Instruct' |
    'Qwen/Qwen2.5-Coder-7B-Instruct' |
    'Qwen/Qwen2.5-3B-Instruct' |
    'Qwen/Qwen2.5-7B-Instruct' |
    'Qwen/Qwen2.5-14B-Instruct' |
    'Qwen/Qwen2.5-32B-Instruct' |
    'Qwen/Qwen2.5-72B-Instruct' |
    'internlm/internlm-xcomposer2d5-7b' |
    'internlm/internlm3-8b-instruct' |
    'internlm/internlm2_5-20b-chat' |
    'vikhyatk/moondream2' |
    'openbmb/MiniCPM-o-2_6' |
    'hexgrad/Kokoro-82M' |
    'black-forest-labs/FLUX.1-schnell' |
    'genmo/mochi-1-preview' |
    'openai/whisper-large-v2' |
    'openai/whisper-medium' |
    'openai/whisper-small'

type PodType = 
    'generalVM' |
    'memoryVM' |
    'cpuVM' |
    'storageVM' |
    'gpuVM' |
    'kubernetes' |
    'serverlessPY' |
    'serverlessJS' |
    'serverlessTS' |
    'mongodb' |
    'postgresql' |
    'mysql' |
    'BAAI/bge-m3' |
    Model
    




interface File{
    ID: string;
    bucketID: string;
}

interface Pod {
    name: string;
    files?: File;
    priceRange: number[];
    type: PodType;
    status: 'deployed' | 'deploying' | 'undeployed';
    memory?: number;
    cpu?: number;
    gpu?: number;
    storage?: number;
    nodes?: number;
}

interface Stxred{
    file: File;
    size: number;
}

interface InfxrenceConfig{
    priceRange: number[];
}

interface User {
    walletAddress: string;
    userID: string;
    provider: boolean;
    chain: Chain;
    pods: Pod[];
    cxmputeBalance: number;
    stxres: Stxred[];
    totalStxrage: number;
    infxrenceConfig: InfxrenceConfig;
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
              
              const rawUser = await cxmpute_backend.getOrCreateUser(address, selectedChainString);

              const user: User = motokoToFrontendUser(rawUser);

              onWalletConnected?.(user);
            } else {
              console.error("Plug wallet not found. Please install Plug for ICP.");
            }
          } else {

            console.log('WIndow',window)
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
              
              const rawUser = await cxmpute_backend.getOrCreateUser(walletAddress, selectedChainString);

              const user: User = motokoToFrontendUser(rawUser);

              console.log("User:", user);
              
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