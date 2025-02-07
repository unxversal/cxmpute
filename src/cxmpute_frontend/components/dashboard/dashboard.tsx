import styles from './dashboard.module.css';
import * as React from 'react'
import { useState, useEffect } from 'react';
import { Cobe } from '../cobe/cobe';
import { cxmpute_backend } from './../../../declarations/cxmpute_backend';
import DecryptedText from '../decryptedText/decryptedText';
import Menulist from '../menulist/menulist';
import SignIn from '../signIn/signin';
import LoggedInDash from '../loggedInDash/loggedInDash';

// interfaces

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

type DashboardProps = {
    toggleDashboard: () => void;
};

const sampleUser: User = {
    walletAddress: "0xABCDEF1234567890",
    userID: "generatedUserId42",
    provider: false,
    chain: "starknet",  // any valid Chain value: "icp", "metis", etc.
    pods: [
      {
        name: "MyFirstGPU",
        files: {
          ID: "file-xyz",
          bucketID: "myBucket123"
        },
        priceRange: [10, 500],
        type: "gpuVM",  // e.g., "gpuVM", "serverlessJS", or one of the model strings
        status: "deploying",  // or "deployed" / "undeployed"
        memory: 4096,  // in MB, for instance
        cpu: 4,
        gpu: 1,
        storage: 100,  // in GB
        nodes: 1
      },
      {
        name: "MongoDBInstance",
        files: {
          ID: "file-abc",
          bucketID: "bucket-mongo"
        },
        priceRange: [0, 50],
        type: "mongodb",
        status: "deployed",
        memory: 2048,
        cpu: 2,
        gpu: 0,
        storage: 50,
        nodes: 3
      }
    ],
    cxmputeBalance: 1234,
    stxres: [
      {
        file: {
          ID: "backup-01",
          bucketID: "bucket-backups"
        },
        size: 99999
      }
    ],
    totalStxrage: 888888,
    infxrenceConfig: {
      priceRange: [10, 100]
    }
  };
  

export default function Dashboard({ toggleDashboard }: DashboardProps) {

    const [page, setPage] = useState('home');
    const [user, setUser] = useState<User | null>(sampleUser);
    const [selectedChain, setSelectedChain] = useState<string>('');

    // useEffect runs on component mount
    useEffect(() => {
        fetchUser();
    }, []); // The empty array ensures this runs only once on mount

    // Example fetchUser function
    const fetchUser = async () => {
        try {
        // Replace the URL with your actual API endpoint
        const response = await fetch('/api/user');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        setUser(userData);
        } catch (error) {
        console.error('Error fetching user:', error);
        }
    };

    const locationToAngles = (lat: number, long: number) => {
        return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
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

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>CXMPUTE</div>
                <div className={styles.headerRight}>
                    <button onClick={toggleDashboard}>VIEW HERO</button>
                </div>
            </div>
            <div
                style={{
                    fontFamily: "Helvetica Neue",
                    fontWeight: 200,
                }} 
                className={styles.dashboard}>
                <div className={styles.leftMenu}>
                        <Menulist setPage={setPage} />
                </div>
                <div className={styles.rightContent}>
                    
                        {page === 'home' && (<div className={styles.homePage}>
                            <Cobe markerlist={markerlist}/>
                        </div>)}
                        {page === 'dashboard' && <div className={styles.dashboardPage}>
                            {user &&<LoggedInDash user={user} setPage={setPage} setUser={setUser} />}
                            {!user && <SignIn 
                                selectedChain={selectedChain} 
                                setSelectedChain={setSelectedChain}
                                onWalletConnected={setUser}
                            />}

                        </div>}
                        {page === 'myPods' && <div className={styles.myPodsPage}>
                            <h1>My Pods</h1>
                        </div>}
                        {page === 'podMarket' && <div className={styles.podMarketPage}>
                            <h1>Pod Market</h1>
                        </div>}
                        {page === 'serverless' && <div className={styles.serverlessPage}>
                            <h1>Sxrverless</h1>
                        </div>}
                        {page === 'infxrence' && <div className={styles.infxrencePage}>
                            <h1>Infxrence</h1>
                        </div>}
                        {page === 'kxbernetes' && <div className={styles.kxbernetesPage}>
                            <h1>Kxbernetes</h1>
                        </div>}
                        {page === 'agxnts' && <div className={styles.agxntsPage}>
                            <h1>Agxnts</h1>
                        </div>}
                        {page === 'stxrage' && <div className={styles.stxragePage}>
                            <h1>Stxrage</h1>
                        </div>}
                        {page === 'daiArchxve' && <div className={styles.daiArchxvePage}>
                            <h1>dAI Archxve</h1>
                        </div>}
                        {page === 'playground' && <div className={styles.playgroundPage}>
                            <h1>Plxyground</h1> 
                        </div>}     
                        {page === 'chat' && <div className={styles.chatPage}>        
                            <h1>Chxt</h1>       
                        </div>}
                        {page === 'provider' && <div className={styles.providerPage}>        
                            <h1>Prxvider</h1>       
                        </div>}  
                        {page === 'settings' && <div className={styles.settingsPage}>        
                            <h1>Settings</h1>       
                        </div>}
                        
                </div>
            </div>
        </div>
    );
};