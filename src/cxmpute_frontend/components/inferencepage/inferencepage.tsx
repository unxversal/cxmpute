import styles from './inferencepage.module.css';
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

export default function InferencePage() {

    const [popupModel, setPopupModel] = React.useState<string | null>(null);
    
    const openPopup = (model: string) => {
        setPopupModel(model);
    };

    const closePopup = () => {
        setPopupModel(null);
    };


    return (
        <div className={styles.podspage}>
            <div className={styles.header}>
                <div className={styles.title}>INFXRENCE</div>
            </div>
            <div className={styles.pods}>
                {models.map((model, index) => (
                    <div className={styles.pod}>
                        <div className={styles.podName}>
                            <img
                                src="/brain-electricity.svg"
                                alt="Model Icon"
                                style={{
                                width: '5vw',
                                height: '5vw',
                                marginRight: '8px',
                                marginLeft: 0,
                                marginBottom: 0,
                                filter: 'brightness(0) invert(1)',
                                }}
                            />
                            {model}</div>
                        <div className={styles.podPrice}>
                            <a
                                href="https://unxversal.github.io/modeldocs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={styles.docsButton}>DOCS</button>
                            </a>
                            <button
                                className={styles.sampleRequestButton}
                                onClick={() => openPopup(model)}
                            >
                                SAMPLE REQUEST
                            </button>
                            <button
                                className={styles.sampleRequestButton}
                            >
                                DOWNLOAD
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {popupModel && (
                <div className={styles.popupOverlay} onClick={closePopup}>
                    <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                        <h2>Sample API Request</h2>
                        <p>This is a sample API request for model:</p>
                        <p className={styles.popupModelName}>{popupModel}</p>
                        <pre className={styles.apiRequest}>
                            {`fetch('http://api.cxmpute.xyz/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_API_KEY'
                },
                body: JSON.stringify({
                    model: '${popupModel}',
                    messages: [
                        { "role": "system", "content": "You are a helpful assistant." },
                        { "role": "user", "content": "Hello, how are you?" }
                    ],
                    temperature: 0.7
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));`}
                        </pre>
                        <button className={styles.closePopup} onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}


        </div>
    );
};