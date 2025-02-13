export type Chain = 
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

export type Model = 'meta-llama/Llama-3.3-70B-Instruct' |
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

export type PodType = 
'generalVM' |
'memoryVM' |
'cpuVM' |
'storageVM' |
'gpuVM' |
'kubernetes' |
'serverlessPY' |
'serverlessJS' |
'serverlessTS' |
'vxctor' |
'mongodb' |
'postgresql' |
'mysql' |
'BAAI/bge-m3' |
Model





export interface File{
ID: string;
bucketID: string[];
}

export interface Pod {
  name: string;
  files?: File;
  priceRange: number[];
  type: PodType;
  status: 'deployed' | 'deploying' | 'undeployed';
  memory?: number;
  vCPU?: number;
  gpu?: string;
  storage?: number;
  nodes?: number;
  numVMs?: number;
  priceType?: 'hourly' | 'monthly';
  deployTimer?: number;
  matchID?: number;
  podID?: number;
  httpKey?: string;
  numRequests?: number;
  numTokensIn?: number;
  numTokensOut?: number;
  numSxrverlessExecutions?: number;
  dbReplicationNumber?: number;
  vectorDimension?: number;
}

interface SSHConnectionInfo {
  // The IP address or hostname of the VM.
  ipAddress: string;

  // The port for SSH connection (default is 22, but this could be configurable).
  port: number;

  // The username to use for authentication (e.g., 'root' for Linux-based systems).
  username: string;

  // The SSH private key or the key pair used for authentication.
  privateKey: string; // Could also be publicKey if using key-based auth on the client side.

  // Optionally, a public key to be used on the VM side for validation. (Optional, only if needed).
  publicKey?: string;

  // The expiration time of the rental session in ISO 8601 format (e.g., "2025-02-13T12:00:00Z").
  expirationTime: string;

  // A unique token that can be used for additional security or time-based access (JWT or similar).
  accessToken: string;

  // An optional field for additional info, like a VM-specific identifier or reference.
  vmIdentifier?: string;
}



export interface Stxred{
file: File;
size: number;
}

export interface InfxrenceConfig{
priceRange: number[];
}

export interface User {
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

export const chainData: {
    [chain: string]: { chainID: string; tokenAddress: string; erc20abi?: string };
  } = {
    polygonzkEVM: {
      chainID: '1101', // Polygon zkEVM Mainnet
      tokenAddress: '0xYourPolygonTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    metis: {
      chainID: '1088', // Metis Andromeda Mainnet
      tokenAddress: '0xYourMetisTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    aptos: {
      chainID: '', // Aptos is not EVM-compatible; MetaMask does not support it
      tokenAddress: '0xYourAptosTokenAddress',
    },
    icp: {
      chainID: '', // ICP is not EVM-compatible; MetaMask does not support it
      tokenAddress: '', // $CXPT ICRC token address
    },
    velas: {
      chainID: '106', // Velas EVM Mainnet
      tokenAddress: '0xYourVelasTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    bnbchain: {
      chainID: '56', // BNB Smart Chain Mainnet
      tokenAddress: '0xYourBNBChainTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    starknet: {
      chainID: '', // StarkNet is not EVM-compatible; MetaMask does not support it
      tokenAddress: '0xYourStarkNetTokenAddress',
    },
    aleo: {
      chainID: '', // Aleo is not EVM-compatible; MetaMask does not support it
      tokenAddress: '0xYourAleoTokenAddress',
    },
    lisk: {
      chainID: '1135', // Lisk is not EVM-compatible; MetaMask does not support it
      tokenAddress: '0xYourLiskTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    moonbeam: {
      chainID: '1284', // Moonbeam Mainnet
      tokenAddress: '0xYourMoonbeamTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    avalanche: {
      chainID: '43114', // Avalanche C-Chain Mainnet
      tokenAddress: '0xYourAvalancheTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    roostock: {
      chainID: '30', // Rootstock Mainnet
      tokenAddress: '0xYourRootstockTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    linea: {
      chainID: '59144', // Linea Mainnet
      tokenAddress: '0xYourLineaTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    cronos: {
      chainID: '25', // Cronos Mainnet
      tokenAddress: '0xYourCronosTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    polygonPOS: {
      chainID: '137', // Polygon (Matic) Mainnet
      tokenAddress: '0xYourPolygonPOSTokenAddress',
      erc20abi: '', //Stringified JSON of the ERC20 contract ABI
    },
    vechain: {
      chainID: '', // VeChain is not EVM-compatible; MetaMask does not support it
      tokenAddress: '0xYourVeChainTokenAddress',
    },
  };
  

  
  export const podString: PodType[] = [
    'generalVM',
    'memoryVM',
    'cpuVM',
    'storageVM',
    'gpuVM',
    'kubernetes',
    'serverlessPY',
    'serverlessJS',
    'serverlessTS',
    'vxctor',
    'mongodb',
    'postgresql',
    'mysql',
    'BAAI/bge-m3',
    'meta-llama/Llama-3.3-70B-Instruct',
    'meta-llama/Llama-3.2-11B-Vision-Instruct',
    'meta-llama/Llama-3.2-90B-Vision-Instruct',
    'meta-llama/Llama-3.1-8B-Instruct',
    'meta-llama/Llama-3.2-3B-Instruct',
    'deepseek-ai/DeepSeek-R1',
    'deepseek-ai/DeepSeek-V3',
    'meta-llama/Llama-3.1-405B-Instruct',
    'microsoft/Phi-3.5-MoE-instruct',
    'microsoft/Phi-3.5-vision-instruct',
    'mistralai/Mistral-Small-24B-Instruct-2501',
    'mistralai/Pixtral-12B-2409',
    'mistralai/Mistral-Nemo-Instruct-2407',
    'mistralai/Mixtral-8x7B-Instruct-v0.1',
    'mistralai/Mistral-7B-Instruct-v0.3',
    'Qwen/Qwen2.5-VL-3B-Instruct',
    'Qwen/Qwen2.5-VL-7B-Instruct',
    'Qwen/Qwen2.5-VL-72B-Instruct',
    'Qwen/Qwen2.5-7B-Instruct-1M',
    'Qwen/Qwen2.5-14B-Instruct-1M',
    'Qwen/QwQ-32B-Preview',
    'Qwen/QVQ-72B-Preview',
    'Qwen/Qwen2.5-Coder-32B-Instruct',
    'Qwen/Qwen2.5-Coder-14B-Instruct',
    'Qwen/Qwen2.5-Coder-7B-Instruct',
    'Qwen/Qwen2.5-3B-Instruct',
    'Qwen/Qwen2.5-7B-Instruct',
    'Qwen/Qwen2.5-14B-Instruct',
    'Qwen/Qwen2.5-32B-Instruct',
    'Qwen/Qwen2.5-72B-Instruct',
    'internlm/internlm-xcomposer2d5-7b',
    'internlm/internlm3-8b-instruct',
    'internlm/internlm2_5-20b-chat',
    'vikhyatk/moondream2',
    'openbmb/MiniCPM-o-2_6',
    'hexgrad/Kokoro-82M',
    'black-forest-labs/FLUX.1-schnell',
    'genmo/mochi-1-preview',
    'openai/whisper-large-v2',
    'openai/whisper-medium',
    'openai/whisper-small'
];