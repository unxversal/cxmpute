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
'mongodb' |
'postgresql' |
'mysql' |
'BAAI/bge-m3' |
Model





export interface File{
ID: string;
bucketID: string;
}

export interface Pod {
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