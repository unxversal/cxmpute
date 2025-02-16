import { Cobe } from '../cobe/cobe';
import DecryptedText from '../decryptedText/decryptedText';
import styles from './hero.module.css';
import * as React from 'react';

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
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2 & 3</div>
                    <div className={styles.item3}>4</div>
                    <div className={styles.item4}>6 & 10</div>
                    <div className={styles.item5}>7 8 11 12</div>
                </div>
                <div className={styles.dashFooter}>
                    <div className={styles.bottombutton}>
                        Github ✦
                    </div>
                </div>
            </div>
            
        </div>
    );
};