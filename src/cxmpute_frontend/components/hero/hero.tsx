import Spiral from '../3dspiral/3dspiral';
import { Cobe } from '../cobe/cobe';
import DecryptedText from '../decryptedText/decryptedText';
import styles from './hero.module.css';
import * as React from 'react';
import { useState } from 'react';

type HeroProps = {
    toggleDashboard: () => void;
};

export default function Hero({ toggleDashboard }: HeroProps) {

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
    'cartesi' |
    'aleo' |
    'polygon' |
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

    interface InfxrenceModel{
        model: Model;
        runs: number;
    }
    
    type City = {
        location: number[];
        size: number;
    }
    
    interface TokenStat{
        chain: Chain;
        marketCap: number;
        currentPrice: number;
        inCirculation: number;
    }

    interface NetworkStats{
        totalUsers: number;
        totalProviders: number;
        cxmputeProcessed: number;
        infxrenceRequests: number;
        modelSpecificRequests: InfxrenceModel[];
        sxrverlessExecutions: number;
        vmsAvailable: number;
        stxrageUsed: number;
        agxntRequests: number;
        workflowExecutions: number;
        cities: City[];
        tokenStats: TokenStat[];
    }

    const marketlist: { lat: number; long: number }[] = [
        { lat: 40.7128, long: -74.0060 },   // New York City, USA
        { lat: 51.5074, long: -0.1278 },    // London, UK
        { lat: 35.6895, long: 139.6917 },   // Tokyo, Japan
        { lat: 48.8566, long: 2.3522 },     // Paris, France
        { lat: 34.0522, long: -118.2437 },  // Los Angeles, USA
        { lat: 41.8781, long: -87.6298 },   // Chicago, USA
        { lat: -33.8688, long: 151.2093 },  // Sydney, Australia
        { lat: 19.0760, long: 72.8777 },    // Mumbai, India
        { lat: -23.5505, long: -46.6333 },  // São Paulo, Brazil
        { lat: 55.7558, long: 37.6173 },    // Moscow, Russia
        { lat: 22.3193, long: 114.1694 },   // Hong Kong, SAR
        { lat: 39.9042, long: 116.4074 },   // Beijing, China
        { lat: 30.0444,  long: 31.2357 },   // Cairo, Egypt
        { lat: -26.2041, long: 28.0473 },   // Johannesburg, South Africa
        { lat: 6.5244,   long: 3.3792 },    // Lagos, Nigeria
        { lat: -1.2921,  long: 36.8219 },   // Nairobi, Kenya
    ];

    // convert marker list to angles
    const markerlist = marketlist.map((marker) => {
        return {location: [marker.lat, marker.long], size: 0.02}
    })

    interface Feature{
        name: string;
        image: string;
        description: string;
    }

    const featureList: Feature[] = [
        {
            name: 'Virtual Machines',
            image: '/cube-scan.svg',
            description: 'Virtual Machines (VMs) offer a customizable, scalable compute environment to run a variety of workloads. With Cxmpute, providers offer VMs optimized for specific hardware configurations, enabling efficient and cost-effective computing across a decentralized network.'
        },
        {
            name: 'Serverless',
            image: '/cloud-square.svg',
            description: 'Cxmpute’s Serverless service provides event-driven compute without the need to manage traditional servers. This highly scalable solution allows users to deploy applications with minimal overhead, leveraging the power of a decentralized network.'
        },
        {
            name: 'AI Agents',
            image: '/brain-electricity.svg',
            description: 'AI Agents are modular, intelligent agents that can perform a wide range of tasks, from simple automation to complex workflows. With Cxmpute’s Agxnt service, users can integrate AI agents seamlessly into their applications, enhancing productivity and creativity.'
        },
        {
            name: 'Workflows',
            image: '/codexecution.svg',
            description: 'Workflows allow users to automate and manage tasks by combining various compute services. With Cxmpute’s decentralized infrastructure, workflows can span multiple providers and services, ensuring flexibility, reliability, and scalability.'
        },
        {
            name: 'Kubernetes',
            image: '/server.svg',
            description: 'Kubernetes enables large-scale container orchestration for distributed applications. Cxmpute supports Kubernetes to facilitate decentralized AI training, serverless deployments, and scalable applications, enhancing both reliability and flexibility for users.'
        },
        {
            name: 'AI Inference',
            image: '/brain-electricity.svg',
            description: 'Cxmpute’s AI Inference service provides serverless AI model execution, enabling rapid and cost-efficient inference without the need to manage infrastructure. This makes deploying AI models on decentralized resources both affordable and scalable.'
        },
        {
            name: 'AI Fine-tuning',
            image: '/brain-research.svg',
            description: 'AI Fine-tuning allows users to customize pre-trained models on their specific datasets. With Cxmpute, this process is decentralized and scalable, empowering users to enhance model accuracy at a lower cost and without the need for centralized data centers.'
        },
        {
            name: 'AI Training',
            image: '/brain.svg',
            description: 'Cxmpute provides decentralized infrastructure for large-scale machine learning model training. By utilizing the network’s distributed compute power, users can access a flexible, cost-efficient solution for AI training workloads.'
        },
        {
            name: 'Storage',
            image: '/database.svg',
            description: 'Stxrage is Cxmpute’s decentralized storage service, providing secure and censorship-resistant file storage. It ensures data integrity and accessibility while avoiding centralized points of failure.'
        },
        {
            name: 'Vector Database',
            image: '/internet-dive.svg',
            description: 'Cxmpute’s Vector Database service enables efficient search and retrieval of high-dimensional data, such as AI model embeddings. This service supports the decentralization of complex data storage, making AI-driven applications faster and more reliable.'
        },
        {
            name: 'AI Chat',
            image: '/telegram.svg',
            description: 'AI Chat integrates AI-driven conversational agents for seamless, automated communication. Through the Cxmpute network, users can engage in real-time, interactive chat experiences with a variety of pre-built or custom AI agents.'
        },
        {
            name: 'Databases',
            image: '/database-solid.svg',
            description: 'Cxmpute’s database services allow users to store and query structured data in a decentralized, secure environment. Leveraging Stxrage ensures that all data operations are resilient to failure and censorship.'
        },
        {
            name: 'Datasets',
            image: '/database-export.svg',
            description: 'Cxmpute offers a decentralized platform for sharing and storing datasets. Users can access, contribute, and collaborate on datasets in a transparent, open, and secure environment, enabling research and innovation.'
        },
        {
            name: 'Code Spaces',
            image: '/computer.svg',
            description: 'Code Spaces provides a cloud-based development environment for coding, testing, and deploying applications. It leverages decentralized resources to ensure efficient and flexible access to the compute power needed for development.'
        },
        {
            name: 'PyNotebooks',
            image: '/code.svg',
            description: 'PyNotebooks allow users to run Python-based data science and machine learning workflows in an interactive environment. Powered by Cxmpute’s decentralized compute network, these notebooks offer flexible, cost-effective solutions for data-driven applications.'
        },
        {
            name: 'Rendering',
            image: '/select-face3d.svg',
            description: 'Cxmpute’s Rendering service provides decentralized 3D rendering capabilities, perfect for digital content creation, simulations, and virtual worlds. This service uses distributed compute resources to speed up rendering tasks while reducing costs.'
        },
    ]
    
    const [selectedFeature, setSelectedFeature] = useState('')

    
    return (
        <div className={styles.hero}>
            {/* <div className={styles.left}>
                <DecryptedText
                    text="CXMPUTE"
                    revealDirection="center"
                    className="revealedTitle"
                    encryptedClassName="encryptedTitle"
                />
                <div className={styles.subtitle}>
                    <p>the decentralized backend for the web</p>
                    <div onClick={() => window.open('https://drive.google.com/file/d/1JN7-61fcTdFn3OM5Z-pAXi1VEUmuLX8p/view?usp=sharing', '_blank')}>
                        <DecryptedText 
                            text="WHITEPAPER" 
                            className="revealed"
                            encryptedClassName="encrypted"
                        />
                    </div>
                    
                    <div onClick={() => window.open('https://drive.google.com/file/d/1rax3ujJv0Bw7Z30V3s9pDPC1Q0dhCoeG/view?usp=sharing', '_blank')}>
                        <DecryptedText 
                            text="GET INVOLVED" 
                            className="revealed"
                            encryptedClassName="encrypted"
                        />
                    </div>
                    
                    <button className={styles.button} onClick={toggleDashboard}>
                        <DecryptedText 
                            text="OPEN CXMPUTE" 
                            className="revealedButton"
                            encryptedClassName="encryptedButton"
                        />
                    </button>
                </div>
                
            </div>
            <div className={styles.right}>
                <Cobe markerlist={markerlist} />
            </div> */}

            <div className={styles.oneDash}>
                <div className={styles.dashHeader}>
                    <div className={styles.leftNav}>
                    ✦ CXMPUTE 
                    </div>
                    <div className={styles.rightNav}>
                        <div className={styles.navElement}>
                            Whitepaper ✦ 
                        </div>
                        <div className={styles.navElement}>
                            Why Cxmpute? ✦
                        </div>
                        <div className={styles.navElement}>
                            Docs ✦ 
                        </div>
                        <div className={styles.navElement}>
                             Pricing ✦ 
                        </div>
                        <div className={styles.navElement}>
                             Solutions ✦ 
                        </div>
                        <div className={styles.navElement}>
                             Products ✦ 
                        </div>
                        <div className={styles.navElement}>
                             Map ✦ 
                        </div>
                        <div className={styles.navElement}>
                             Next Steps ✦ 
                        </div> 
                    </div>
                    
                </div>
                <div className={styles.dashContent}>
                    <div className={styles.item1}>
                        <Spiral />
                        <div className={styles.spiralOverlay}>
                            <h1>CXMPUTE</h1>
                            {/* <p>The World Datacenter</p> */}
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <p><strong>Cxmpute is a decentralized compute network that allows anyone with an eligible computer to monetize idle computing power.</strong></p>
                        <p>By distributing resources globally, we provide cost-effective, flexible, and scalable solutions for both compute providers and users.</p>
                        <p>Whether you need virtual machines, serverless compute, or decentralized AI services, Cxmpute ensures efficiency and accessibility for all, creating the <span className={styles.goldenText}>world’s largest datacenter</span> without the need for massive upfront investments. </p>
                        <p>Join us in building the future of decentralized computing.</p>
                        <ul className={styles.socials}>
                            <li onClick={() => window.open('https://github.com/unxversal', '_blank')}>
                                <img
                                src="/github-circle.svg"
                                alt="Github icon"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '8px',
                                    marginLeft: 0,
                                    filter: 'brightness(0) invert(1)',
                                    cursor: 'pointer',
                                }}
                                />
                            </li>
                            <li
                                onClick={() => window.open('https://discord.gg/vE3xvFsZA8', '_blank')}
                            >
                                <img
                                src="/discord.svg"
                                alt="Discord icon"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '8px',
                                    marginLeft: 0,
                                    filter: 'brightness(0) invert(1)',
                                    cursor: 'pointer',
                                }}
                                />
                            </li>
                            <li
                                onClick={() => window.open('https://x.com/cxmpute', '_blank')}
                            >
                                <img
                                src="/x.svg"
                                alt="X icon"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '8px',
                                    marginLeft: 0,
                                    filter: 'brightness(0) invert(1)',
                                    cursor: 'pointer',
                                }}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item3}>
                        <h1>Start Earning</h1>
                        <p>Learn more about how you can become a Cxmpute Provider and put your hardware to work for you.</p>
                        <button>》》</button>
                    </div>
                    <div className={styles.item4}>
                        {featureList.map((feature, index)=>(
                            <div 
                                onClick={() => setSelectedFeature(feature.name)}
                                className={styles.featureButton}>
                                <img
                                    src={feature.image}
                                    alt="Model Icon"
                                    style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '8px',
                                    marginLeft: 0,
                                    marginBottom: 0,
                                    filter: 'brightness(0) invert(1)',
                                    }}
                                />
                                <p>{feature.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.item5}>
                        {selectedFeature == '' ? <Cobe markerlist={markerlist} /> : (
                            <>
                                <h1>{selectedFeature}</h1>
                                <p>{featureList.find((feature) => feature.name == selectedFeature)?.description}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.dashFooter}>
                    <div className={styles.bottombutton}>
                        Github ✦
                    </div>
                    <div className={styles.bottomButton} onClick={toggleDashboard}>
                        <DecryptedText 
                            text="OPEN CXMPUTE ✦" 
                            className="heroButton"
                            encryptedClassName="heroButton"
                        />
                    </div>
                </div>
            </div>
            
        </div>
    );
};