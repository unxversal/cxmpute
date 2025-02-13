import styles from './podspage.module.css';
import * as React from 'react';
import { User } from '../../lib/types';
import { useState } from 'react';
import { PodType, Model, podString, Pod } from '../../lib/types';

interface PodsPageParams{
    user?: User;
}

interface UpdatedPodParams{
    name: string;
    files?: File;
    priceRange?: number[];
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
}

const podoptions: PodType[] = [
    'generalVM',
    'memoryVM',
    'cpuVM',
    'storageVM',
    'gpuVM',
    'kubernetes',
    'serverlessPY',
    'serverlessJS',
    'serverlessTS',
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

export default function PodsPage({ user }: PodsPageParams) {

    const [formOpen, setFormOpen] = useState(false);
    const [podType, setPodType] = useState<PodType>('generalVM');
    const [newPodName, setNewPodName]= useState('');
    const [numGPUs, setNumGPUs] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log('Form data:', formData);
        const formValues: any = Object.fromEntries(formData.entries());
        console.log('Form values:', formValues);
    
        // Conditionally access specific form elements based on podType
        let constructedPod = {};
        switch (podType) {
            case 'generalVM':
                 (constructedPod as Pod) = {
                    name: formValues.pxdName,
                    priceRange: [Number(formValues.minPrice), Number(formValues.maxPrice)],
                    type: podType,
                    status: 'undeployed',
                    memory: Number(formValues.ram),
                    vCPU: Number(formValues.vCPUs),
                    storage: Number(formValues.storage),
                    priceType: formValues.priceType,
                    deployTimer: Number(formValues.deployTimer),
                }
                break;
            case 'memoryVM':
                (constructedPod as Pod) = {
                    name: formValues.pxdName,
                    priceRange: [Number(formValues.minPrice), Number(formValues.maxPrice)],
                    type: podType,
                    status: 'undeployed',
                    memory: Number(formValues.ram),
                    vCPU: Number(formValues.vCPUs),
                    storage: Number(formValues.storage),
                    priceType: formValues.priceType,
                    deployTimer: Number(formValues.deployTimer),
                }
                break;
            case 'cpuVM':
                (constructedPod as Pod) = {
                    name: formValues.pxdName,
                    priceRange: [Number(formValues.minPrice), Number(formValues.maxPrice)],
                    type: podType,
                    status: 'undeployed',
                    memory: Number(formValues.ram),
                    vCPU: Number(formValues.vCPUs),
                    storage: Number(formValues.storage),
                    priceType: formValues.priceType,
                    deployTimer: Number(formValues.deployTimer),
                }
                break;
            case 'gpuVM':
                (constructedPod as Pod) = {
                    name: formValues.pxdName,
                    priceRange: [Number(formValues.minPrice), Number(formValues.maxPrice)],
                    type: podType,
                    status: 'undeployed',
                    gpu: formValues.gpu,
                    priceType: formValues.priceType,
                    deployTimer: Number(formValues.deployTimer),
                }
                break;
            // Add cases for other PodTypes as needed
            default:
                break;
        }
    

    
        console.log('Constructed Pod:', constructedPod);
        // Call your backend function here with formDataToSubmit
        // Example: await backendFunction(formDataToSubmit);
        setFormOpen(false);
    };

    const renderAdditionalFormElements = () => {
        switch (podType) {
            case 'generalVM':
                return (
                    <>
                        <label>General VM</label>
                        <label>Number of vCPUs:</label>
                        <select name="vCPUs" className={styles.headerButtonSelect}>
                            <option value="1">1 vCPU</option>
                            <option value="2">2 vCPUs</option>
                            <option value="4">4 vCPUs</option>
                            <option value="8">8 vCPUs</option>
                        </select>

                        <label>Memory:</label>
                        <select name="ram" className={styles.headerButtonSelect}>
                            <option value="0.512">512 MiB</option>
                            <option value="2">2 GiB</option>
                            <option value="4">4 GiB</option>
                            <option value="8">8 GiB</option>
                            <option value="16">16 GiB</option>
                        </select>

                        <label>Minimum Storage:</label>
                        <select name="storage" className={styles.headerButtonSelect}>
                            <option value="5">5 GiB</option>
                            <option value="10">10 GiB</option>
                            <option value="20">25 GiB</option>
                            <option value="50">50 GiB</option>
                            <option value="100">60 GiB</option>
                            <option value="200">80 GiB</option>
                            <option value="100">100 GiB</option>
                            <option value="160">160 GiB</option>
                            <option value="200">200 GiB</option>
                            <option value="300">300 GiB</option>
                        </select>

                        <label>Charging Frequency:</label>
                        <select name="priceType" className={styles.headerButtonSelect}>
                            <option value="hourly">Hourly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        

                        <label>Price Range (Optional):</label>
                        <input type="number" placeholder="Min Price in Credits/Frequency" name="minPrice" className={styles.headerButtonInput} />
                        <input type="number" placeholder="Max Price in Credits/Frequency" name="maxPrice" className={styles.headerButtonInput} />

                        <label>Deploy Timer (Optional):</label>
                        <input type="number" placeholder="Hours" name="deployTimer" className={styles.headerButtonInput} />
                    </>
                );
            case 'memoryVM':
                return (
                    <>
                        <label>Memory-Optimized VM</label>
                        <label>Number of vCPUs:</label>
                        <select name="vCPUs" className={styles.headerButtonSelect}>
                            <option value="2">2 vCPU</option>
                            <option value="4">4 vCPUs</option>
                            <option value="8">8 vCPUs</option>
                            <option value="16">16 vCPUs</option>
                            <option value="24">24 vCPUs</option>
                            <option value="32">32 vCPUs</option>
                        </select>

                        <label>Memory:</label>
                        <select name="ram" className={styles.headerButtonSelect}>
                            <option value="16">16 GiB</option>
                            <option value="32">32 GiB</option>
                            <option value="64">64 GiB</option>
                            <option value="128">128 GiB</option>
                            <option value="192">192 GiB</option>
                            <option value="256">256 GiB</option>
                        </select>

                        <label>Minimum Storage:</label>
                        <select name="storage" className={styles.headerButtonSelect}>
                            <option value="50">50 GiB</option>
                            <option value="100">100 GiB</option>
                            <option value="200">200 GiB</option>
                            <option value="400">400 GiB</option>
                            <option value="600">600 GiB</option>
                            <option value="800">800 GiB</option>
                        </select>

                        <label>Charging Frequency:</label>
                        <select name="priceType" className={styles.headerButtonSelect}>
                            <option value="hourly">Hourly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        

                        <label>Price Range (Optional):</label>
                        <input type="number" placeholder="Min Price in Credits/Frequency" name="minPrice" className={styles.headerButtonInput} />
                        <input type="number" placeholder="Max Price in Credits/Frequency" name="maxPrice" className={styles.headerButtonInput} />

                        <label>Deploy Timer (Optional):</label>
                        <input type="number" placeholder="Hours" name="deployTimer" className={styles.headerButtonInput} />
                    </>
                );
            case 'cpuVM':
                return (
                    <>
                        <label>CPU-Optimized VM</label>
                        <label>Number of vCPUs:</label>
                        <select name="vCPUs" className={styles.headerButtonSelect}>
                            <option value="2">2 vCPUs</option>
                            <option value="4">4 vCPU</option>
                            <option value="8">8 vCPUs</option>
                            <option value="16">16 vCPUs</option>
                            <option value="32">32 vCPUs</option>
                            <option value="48">48 vCPUs</option>
                        </select>

                        <label>Memory:</label>
                        <select name="ram" className={styles.headerButtonSelect}>
                            <option value="4">4 GiB</option>
                            <option value="8">8 GiB</option>
                            <option value="16">16 GiB</option>
                            <option value="32">32 GiB</option>
                            <option value="64">64 GiB</option>
                            <option value="96">96 GiB</option>
                        </select>

                        <label>Minimum Storage:</label>
                        <select name="storage" className={styles.headerButtonSelect}>
                            <option value="20">25 GiB</option>
                            <option value="50">50 GiB</option>
                            <option value="100">100 GiB</option>
                            <option value="200">200 GiB</option>
                            <option value="400">400 GiB</option>
                            <option value="600">600 GiB</option>
                        </select>

                        <label>Charging Frequency:</label>
                        <select name="priceType" className={styles.headerButtonSelect}>
                            <option value="hourly">Hourly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        

                        <label>Price Range (Optional):</label>
                        <input type="number" placeholder="Min Price in Credits/Frequency" name="minPrice" className={styles.headerButtonInput} />
                        <input type="number" placeholder="Max Price in Credits/Frequency" name="maxPrice" className={styles.headerButtonInput} />

                        <label>Deploy Timer (Optional):</label>
                        <input type="number" placeholder="Hours" name="deployTimer" className={styles.headerButtonInput} />
                    </>
                );
            case 'storageVM':
                return (
                    <>
                        <label>Storage-Optimized VM</label>
                        <label>Number of vCPUs:</label>
                        <select name="vCPUs" className={styles.headerButtonSelect}>
                            <option value="2">2 vCPUs</option>
                            <option value="4">4 vCPU</option>
                            <option value="8">8 vCPUs</option>
                            <option value="16">16 vCPUs</option>
                            <option value="24">24 vCPUs</option>
                            <option value="32">32 vCPUs</option>
                        </select>

                        <label>Memory:</label>
                        <select name="ram" className={styles.headerButtonSelect}>
                            <option value="16">16 GiB</option>
                            <option value="32">32 GiB</option>
                            <option value="64">64 GiB</option>
                            <option value="128">128 GiB</option>
                            <option value="192">192 GiB</option>
                            <option value="256">256 GiB</option>
                        </select>

                        <label>Minimum Storage:</label>
                        <select name="storage" className={styles.headerButtonSelect}>
                            <option value="300">300 GiB</option>
                            <option value="600">600 GiB</option>
                            <option value="1170">1170 GiB</option>
                            <option value="2340">2340 GiB</option>
                            <option value="3520">3520 GiB</option>
                            <option value="4690">4690 GiB</option>
                        </select>

                        <label>Charging Frequency:</label>
                        <select name="priceType" className={styles.headerButtonSelect}>
                            <option value="hourly">Hourly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        

                        <label>Price Range (Optional):</label>
                        <input type="number" placeholder="Min Price in Credits/Frequency" name="minPrice" className={styles.headerButtonInput} />
                        <input type="number" placeholder="Max Price in Credits/Frequency" name="maxPrice" className={styles.headerButtonInput} />

                        <label>Deploy Timer (Optional):</label>
                        <input type="number" placeholder="Hours" name="deployTimer" className={styles.headerButtonInput} />
                    </>
                )
            case 'gpuVM':
                return (
                    <>
                        <label>GPU VM</label>
                        <label>GPU:</label>
                        <select name="gpu" className={styles.headerButtonSelect} required>
                            <option value="H100">H100 80GB</option>
                            <option value="H200">H200 141GB</option>
                            <option value="A100-80GB">A100 80GB</option>
                            <option value="A100-40GB">A100 40GB</option>
                            <option value="A10">A10 24GB</option>
                            <option value="A4000">A4000 16GB</option>
                            <option value="A4500">A4500 20GB</option>
                            <option value="A40">A40 48GB</option>
                            <option value="A5000">A5000 24GB</option>
                            <option value="A6000">A6000 48GB</option>
                            <option value="L4">L4 24GB</option>
                            <option value="L40">L40 48GB</option>
                            <option value="L40S">L40S 48GB</option>
                            <option value="RTX3070">RTX3070 8GB</option>
                            <option value="RTX3060">RTX3060 12GB</option>
                            <option value="RTX3080">RTX3080 10GB</option>
                            <option value="RTX3080Ti">RTX3080 Ti 12GB</option>
                            <option value="RTX3090">RTX3090 24GB</option>
                            <option value="RTX4090">RTX4090 24GB</option>
                            <option value="RTX4000Ada">RTX4000 Ada 20GB</option>
                            <option value="RTX5000Ada">RTX5000 Ada 32GB</option>
                            <option value="RTX6000Ada">RTX6000 Ada 48GB</option>
                            <option value="V100-16GB">V100 16GB</option>
                            <option value="V100-32GB">V100 32GB</option>
                            <option value="MI100">AMD Instinct MI100</option>
                            <option value="MI200">AMD Instinct MI200</option>
                            <option value="MI250">AMD Instinct MI250</option>
                            <option value="MI300">AMD Instinct MI300</option>
                            <option value="RX6800">AMD Radeon RX 6800</option>
                            <option value="RX6800XT">AMD Radeon RX 6800 XT</option>
                            <option value="RX6900XT">AMD Radeon RX 6900 XT</option>
                            <option value="RX6950XT">AMD Radeon RX 6950 XT</option>
                            <option value="RX7900XT">AMD Radeon RX 7900 XT</option>
                            <option value="RX7900XTX">AMD Radeon RX 7900 XTX</option>
                        </select>

                        <label>Number of Nodes:</label>
                        <input type="number" min="1" placeholder="Number of Nodes" name="nodes" className={styles.headerButtonInput} required onChange={(e) => setNumGPUs(Number(e.target.value))} />

                        {numGPUs > 1 && 
                        <>
                            <label>Multiple or Single VM:</label>
                            <select name="type" className={styles.headerButtonSelect}>
                                <option value="multipleVM">Multiple VMs (Default)</option>
                                <option value="singleVM">Single VM</option>
                            </select>
                        </>}

                        <label>Charging Frequency:</label>
                        <select name="priceType" className={styles.headerButtonSelect}>
                            <option value="hourly">Hourly</option>
                            <option value="monthly">Monthly</option>
                        </select>

                        <label>Price Range (Optional):</label>
                        <input type="number" placeholder="Min Price in Credits/Frequency" name="minPrice" className={styles.headerButtonInput} />
                        <input type="number" placeholder="Max Price in Credits/Frequency" name="maxPrice" className={styles.headerButtonInput} />
                    </>
                );

            case 'serverlessPY':
                return (
                    <>
                        
                    </>
                )

            default:
                return null;
        }
    };

    return (
        <div className={styles.podspage}>
            <div className={styles.header}>
                <div className={styles.title}>YOUR PXDS</div>
                <button className={styles.createPod} onClick={() => setFormOpen(true)}>CREATE A POD</button>  
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
                        </div>


                        <div className={styles.podFooter}>
                            <div className={styles.podType}>{pod.type.toUpperCase()}</div>
                            <div className={styles.togglePodDeployment}>{pod.status === 'deployed' && 'UNDEPLOY PXD'}{pod.status !== 'deployed' && 'DEPLOY PXD'}</div>
                        </div>
                        
                    </div>
                ))}
            </div>

            {formOpen && (
                <div className={styles.createPodForm} onClick={() => setFormOpen(false)}>
                    
                    <div className={styles.form} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.formLeft}>
                            <h2>CREATE NEW PXD:</h2>
                            <h1>{newPodName}</h1>
                        </div>
                        <div className={styles.formRight}>
                            <form onSubmit={handleSubmit}>
                                <label>Pxd Name:</label>
                                <input type="text" placeholder="Pxd Name" name="pxdName" onChange={(e) => setNewPodName(e.target.value)} className={styles.headerButtonInput} />
                                <label>Pxd Type:</label>
                                <select
                                        value={podType}
                                        onChange={(e) => {
                                            try {
                                                setPodType(e.target.value as PodType);
                                            } catch (error) {
                                                alert('Error: Please Select Pxd Type');
                                            }
                                        }}
                                        className={styles.headerButtonSelect}
                                        >
                                        <option value="">Select Pxd Type</option>
                                    
                                        {podString.map(
                                            (pod) =>(    
                                                <option key={pod} value={pod}>
                                                {pod.toUpperCase()}
                                                </option>
                                            )    
                                        )}
                                </select>
                                {renderAdditionalFormElements()}
                                <button type="submit" className={styles.submitButton}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};