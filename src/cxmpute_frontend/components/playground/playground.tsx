import styles from './playground.module.css';
import * as React from 'react';

const models: string[] = [
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

const agents: string[] = [
    "internet",
    "internet dive",
    "deep internet",
    "write memory",
    "search memory",
    "ask memory",
    "clear memory",
    "delete memory",
    "update memory",
    "codexecution",
    "step",
    "image gen",
    "video gen",
    "pdf gen",
    "notebook",
    "presentation gen",
    "text to speech",
    "browser use",
    "youtube",
    "discord",
    "twitter",
    "telegram",
    "dxtabase",
    "sequential code",
    "sequential internet",
    "sequential memory",
];



export default function Playground() {
    return (
        <div className={styles.playground}>
            <div className={styles.playgroundHeader}>
                <h1>PLXYGROUND</h1>
                <div>
                    <select id="modelAgentSelect" name="modelAgentSelect">
                        <optgroup label="Models">
                            {models.map((model, index) => (
                                <option key={`model-${index}`} value={model}>{model}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Agents">
                            {agents.map((agent, index) => (
                                <option key={`agent-${index}`} value={agent}>{agent}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className={styles.playgroundContent}>
            </div>
            <div className={styles.playgroundFooter}>
                <textarea
                    placeholder="Type your message here. Hit SHIFT+ENTER to send your message."
                    className={styles.chatInput}
                />
            </div>
        </div>
    );
}