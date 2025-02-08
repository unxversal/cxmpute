import styles from './chatpage.module.css';
import * as React from 'react';
import Markdown from 'react-markdown'

interface ChatDemo{
    title: string;
    content: string;
}

const chatDemos: ChatDemo[] = [
    {
        title: 'INTRODUCING CXMPUTE/WHITEPAPER',
        content: `
# Cxmpute: A Decentralized Compute Network for the Future

## Abstract
Cxmpute is a groundbreaking decentralized compute network designed to harness underutilized global computing resources and distribute power equitably. By leveraging blockchain technology, decentralized physical infrastructure networks (DePIN), and advanced protocols, Cxmpute aims to build the world’s largest distributed datacenter—offering cost-efficient, secure, and scalable compute services. This whitepaper outlines the vision, technical architecture, product offerings, provider operations, and pricing model that together enable Cxmpute to transform how compute power is sourced, monetized, and deployed.

## Table of Contents
1. [Introduction](#1-introduction)
2. [Background and Motivation](#2-background-and-motivation)
3. [The Cxmpute Vision](#3-the-cxmpute-vision)
4. [Technical Architecture](#4-technical-architecture)
   - [4.1 On-Chain Infrastructure](#41-on-chain-infrastructure)
   - [4.2 Multi-Chain Compatibility](#42-multi-chain-compatibility)
   - [4.3 Provider Setup & Operations](#43-provider-setup--operations)
5. [Cxmpute Offerings](#5-cxmpute-offerings)
   - [5.1 Compute Services](#51-compute-services)
   - [5.2 Agxnt: AI Agents-as-a-Service](#52-agxnt-ai-agents-as-a-service)
6. [Pricing Model](#6-pricing-model)
7. [Security and Decentralization](#7-security-and-decentralization)
8. [Getting Started](#8-getting-started)
9. [Roadmap and Future Work](#9-roadmap-and-future-work)
10. [Conclusion](#10-conclusion)

## 1. Introduction
Recent developments in artificial intelligence infrastructure—such as the $500 billion Stargate project aimed at building colossal centralized data centers—highlight the growing demand for compute power. However, while centralized data centers represent significant investments in physical infrastructure, they also centralize wealth and control, often leaving untapped resources and higher costs in their wake.

Cxmpute challenges this paradigm by proposing a decentralized approach that leverages idle compute resources worldwide. By distributing compute power across a global network, Cxmpute not only democratizes access to high-performance computing but also provides a sustainable and cost-competitive alternative to centralized cloud services.

## 2. Background and Motivation
Blockchain technology has long promised decentralization and transparency. Yet, in recent years, its public perception has been overshadowed by meme coins, NFTs, and speculative projects that rarely deliver real-world utility. The forced application of blockchain in domains like IoT and social media has often resulted in unnecessary complexity.

The advent of decentralized physical infrastructure networks (DePIN) has re-energized interest in genuine, practical applications of decentralization. Cxmpute is born from this renewed focus, harnessing crypto and blockchain protocols to solve real-world problems in the compute infrastructure space. By tapping into idle global compute resources, Cxmpute paves the way for a robust, decentralized datacenter that aligns with both economic and technical imperatives.

## 3. The Cxmpute Vision
Cxmpute is envisioned as the world’s largest decentralized compute network. Its core tenets include:

- **Democratizing Compute Power:** Enabling anyone with eligible hardware to participate, earn rewards, and contribute to a global compute ecosystem.
- **Cost-Efficiency:** As more providers join the network, competition drives down prices, eventually making decentralized computing cheaper than traditional centralized cloud services.
- **Wealth Distribution:** Shifting economic benefits away from centralized corporations and distributing value among network nodes—each backed by physical compute infrastructure.
- **Scalability and Flexibility:** Supporting a broad range of compute services from virtual machines to serverless architectures, catering to varied hardware specifications and user needs.

## 4. Technical Architecture
Cxmpute is built on a robust, decentralized foundation that leverages the Internet Computer Protocol (ICP) and multi-chain compatibility to ensure scalability, security, and interoperability.

### 4.1 On-Chain Infrastructure
- **Frontend & Backend Hosting:**  
  The entire web application—including both frontend and backend components—is hosted on the Internet Computer Protocol (ICP). This ensures that the application is censorship-resistant, transparent, and decentralized from end to end.

- **Decentralized Storage (Stxrage):**  
  Cxmpute’s proprietary storage service, Stxrage, utilizes the ICP to provide secure, censorship-resistant file storage. This decentralized approach eliminates single points of failure and enhances data integrity.

### 4.2 Multi-Chain Compatibility
Thanks to ICP’s ability to make and receive HTTP requests, as well as support transaction signing, Cxmpute is inherently multi-chain. The platform supports all Ethereum Virtual Machine (EVM)-compatible networks and other chains that utilize ECDSA signing, ensuring broad interoperability and a seamless user experience across various blockchain ecosystems.

### 4.3 Provider Setup & Operations
While key application processes such as user matching, signup, and compute requests are handled on-chain via ICP, provider-specific operations require dedicated local software. Providers participate in the network through the following steps:

- **Hardware Integration:**  
  Providers link their computing hardware to their Cxmpute account, ensuring seamless participation in the network.

- **Token Staking:**  
  To maintain network stability and trust, providers stake tokens as a commitment to quality and uptime.

- **Provision Creation:**  
  Providers set up individual Virtual Machines (VMs) or containers—referred to as provisions—that can be rented out or used for serverless compute.

- **Provision Activation:**  
  Providers configure the availability of their provisions (e.g., setting time limits or enabling indefinite access), which are then made live through the provider software. The provider software communicates securely with the on-chain backend via HTTP, ensuring that sensitive operations remain protected from potential security breaches.

## 5. Cxmpute Offerings
Cxmpute provides a comprehensive suite of compute services designed to meet diverse user and provider demands.

### 5.1 Compute Services
- **Virtual Machines:**  
  General-purpose VMs optimized based on the hardware provided—whether GPU, memory, CPU, or storage—to maximize both supply and demand.

- **Serverless Compute:**  
  A decentralized alternative to services like AWS Lambda, enabling scalable, event-driven compute without traditional server management.

- **Serverless Containers:**  
  Similar in functionality to AWS Fargate, these containers offer flexible, decentralized compute solutions without the overhead of server management.

- **Decentralized AI Inference:**  
  The Cxmpute API (available at [api.cxmpute.xyz](https://api.cxmpute.xyz)) hosts a vast selection of models, providing a serverless AI inference service. Users can also host dedicated models for exclusive use.

- **Decentralized AI Archive:**  
  Beyond inference, models are available for download from a censorship-resistant archive, ensuring that AI innovations remain open and accessible.

- **Distributed AI Training:**  
  Utilizing Kubernetes-enabled infrastructure, Cxmpute facilitates large-scale machine learning workloads in a decentralized manner.

### 5.2 Agxnt: AI Agents-as-a-Service
In response to the rising interest in AI agents, Cxmpute introduces **Agxnt**—modular AI agents that users can integrate into workflows via the Cxmpute UI, API, or custom implementations. Providers host Agxnt engines to process requests ranging from simple tasks (e.g., generating presentations or videos) to specialized operations like AI-driven medical research.

**Available Agxnt Agents:**

- **Data & Memory:**  
  Write Memory, Search Memory, Ask Memory, Clear Memory, Delete Memory, Update Memory.

- **Code Execution:**  
  Codexecution, Sequential Code.

- **AI Generation:**  
  Image Gen, Video Gen, PDF Gen, Notebook, Presentation Gen, Text-to-Speech, Step (long-form content).

- **Web & Internet Tools:**  
  Internet, Internet Dive, Deep Internet, Browser Use, Sequential Internet.

- **Social Media & Messaging:**  
  YouTube, Discord, Twitter, Telegram.

- **Databases & Storage:**  
  Dxtabase, Sequential Memory.

By leveraging these agents, users can replicate a vast majority of existing AI agent offerings and automate over 90% of digital workflows.

## 6. Pricing Model
Cxmpute’s flexible pricing model is designed to cater to both providers and users:

- **Provider-Determined Rates:**  
  Providers set their own price per compute unit/second for different service categories upon registration, allowing market dynamics to dictate cost-efficiency.

- **User-Specified Ranges:**  
  When deploying code to serverless compute or containers, users specify a price range that aligns with their budget and performance needs.

- **Dynamic Matching:**  
  Cxmpute’s system matches users with providers based on the specified parameters, ensuring optimal performance and cost-effectiveness.

- **Long-Term Rentals:**  
  Users have the option to rent containers or servers by the hour or month for applications that require consistent and reliable compute power.

## 7. Security and Decentralization
Cxmpute’s design prioritizes security and transparency:

- **On-Chain Operations:**  
  Critical functions such as user authentication, matching, and transaction processing are executed on the ICP, ensuring trustless and verifiable operations.

- **Decentralized Storage:**  
  With Stxrage, files are stored on-chain, mitigating risks associated with centralized data breaches or censorship.

- **Multi-Chain Security:**  
  The multi-chain support, particularly for EVM-compatible networks, leverages robust cryptographic standards (ECDSA signing) to maintain secure and tamper-resistant transactions.

- **Provider Software Safeguards:**  
  The provider-side operations communicate over secure HTTP channels, ensuring that sensitive information—such as hardware integration and token staking—is handled appropriately.

## 8. Getting Started
Cxmpute is designed with usability and simplicity in mind, welcoming both compute providers and users to join our decentralized ecosystem.

- **User Onboarding:**  
  Our website (accessible at [cxmpute.xyz](https://cxmpute.xyz)) offers a streamlined, reliable onboarding process for new users and providers alike.

- **Documentation and Support:**  
  Comprehensive guides, FAQs, and support documents will be made available to ensure that both technical and non-technical participants can quickly and confidently leverage the Cxmpute network.

- **Developer-Friendly APIs:**  
  Well-documented APIs will empower developers to integrate Cxmpute’s decentralized compute capabilities into their applications, fostering innovation and accelerating adoption.

- **Provider Registration:**  
  If you’re interested in becoming a provider and contributing your compute resources, please fill out our provider registration form here: [https://tally.so/r/mKW2lk](https://tally.so/r/mKW2lk).

- **User and Community Involvement:**  
  For those interested in using Cxmpute or getting involved in the community, please complete our engagement form here: [https://tally.so/r/w86DQY](https://tally.so/r/w86DQY).

## 9. Roadmap and Future Work
Cxmpute’s journey is just beginning, and our roadmap is structured to ensure a robust and dynamic rollout of our decentralized compute network:

- **Provider Onboarding:**  
  Aggressively recruit and onboard compute providers to build a globally distributed compute network.

- **User Engagement:**  
  Simultaneously attract and engage potential users to create a vibrant, demand-driven ecosystem.

- **Software Development:**  
  Finalize and optimize our platform software to ensure seamless integration and operation across the network.

- **Closed Beta:**  
  Launch a closed beta to rigorously test performance, security, and user experience before full-scale deployment.

- **Public Mainnet Launch:**  
  Roll out the public mainnet, making Cxmpute’s decentralized compute services widely available.

As we progress, we will continue to expand our service offerings, enhance security protocols, and foster strategic ecosystem partnerships—all guided by community feedback and decentralized governance principles.

## 10. Conclusion
Cxmpute represents a paradigm shift in how compute power is distributed, accessed, and monetized. By leveraging decentralized technologies and a robust, multi-chain architecture, Cxmpute is poised to disrupt traditional centralized data centers, offering a cost-effective, secure, and scalable alternative. As the network grows, it will not only drive down costs but also democratize access to compute resources—paving the way for a future where compute power is both ubiquitous and equitably distributed.

For more details, developer documentation, and updates, please visit [cxmpute.xyz](https://cxmpute.xyz).

        `,
    },
    {
        title: 'CXMPUTE ARCHITECTURE',
        content: `
### **CXMPUTE Architecture**  

![Cxmpute Architecture](https://i.postimg.cc/zXSYbVJf/Screenshot-2025-02-07-at-6-48-47-PM.png)

---

CXMPUTE will be fully hosted on-chain, ensuring a decentralized and robust infrastructure. Here's how it works:  

- **Frontend & Backend**: The entire web application, including both frontend and backend components, will be hosted on the Internet Computer Protocol (ICP).  
- **Decentralized Storage**: Cxmpute’s **Stxrage** service will leverage the Internet Computer Protocol for secure and censorship-resistant file storage.  
- **Multi-Chain Compatibility**: With ICP’s ability to make and receive HTTP requests and sign transactions, CXMPUTE will be seamlessly **multi-chain**, supporting all EVM-compatible networks and chains utilizing ECDSA signing.  
- **Core Processes on ICP**: Key functions such as **user matching, signup, and app operations** will run entirely on ICP, ensuring trustless execution and transparency. The only exceptions are provider-side operations, which require local software.  

#### **Provider Setup & Operations**  

To participate as a provider, users will need to install the **CXMPUTE Provider Software**, which facilitates:  

1. **Hardware Integration** – Linking their system to their provider account.  
2. **Token Staking** – Committing tokens to ensure network stability.  
3. **Provision Creation** – Setting up individual **VMs or containers** that can be rented or used for serverless compute.  
4. **Provision Activation** – Configuring availability settings (e.g., setting a time limit or enabling indefinite access).  

The **Provider Software** will automate most of this process while securely communicating with the app backend via HTTP. This ensures sensitive operations are handled efficiently, preventing potential security vulnerabilities.  

#### **Service Endpoints**  

CXMPUTE will expose dedicated endpoints for its core compute offerings:  

- **AGXNT** – AI Agents-as-a-Service  
- **INFXRENCE** – Decentralized AI inference  
- **SXRVERLESS** – Serverless compute and containers  

This architecture guarantees **scalability, security, and decentralization**, positioning CXMPUTE as a next-generation compute network.  

# Sample Processes

## Sample Process for renting a VM

![VM Process](https://i.postimg.cc/D0Bf9T2r/Screenshot-2025-02-07-at-7-06-35-PM.png)

## Sample Process for Sxrverless Inference

![Sxrverless Process](https://i.postimg.cc/Y0pqD9w2/Screenshot-2025-02-07-at-7-06-40-PM.png)

## Sample Process for Infxrence

![Infxrence Process](https://i.postimg.cc/k4NgySzh/Screenshot-2025-02-07-at-7-06-56-PM.png)

## Sample Process for AI Chat

![Chxt Process](https://i.postimg.cc/1t1z6BCq/Screenshot-2025-02-07-at-7-13-01-PM.png)
        `,
    },
    {
        title: 'CXMPUTE UI WALKTHROUGH',
        content: `
# Cxmpute UI Walkthrough
### Dashboard
![Screenshot-2025-02-07-at-7-46-03-PM.png](https://i.postimg.cc/kGbw74xx/Screenshot-2025-02-07-at-7-46-03-PM.png)
The dashboard displays an overview of a user's compute state. Here a user can load credits and change the chain that Cxmpute is operating on.

### My Pods
![My Pods Screenshot](https://i.postimg.cc/kG2MGr4N/Screenshot-2025-02-07-at-12-48-31-PM.png)
Pods are the heart of Cxmpute. There are various pod types, and how users interact with them after deploying varies depending on the type, but this is where most of Cxmpute interaction lies.

### Infxrence
![Infxrence Screenshot](https://i.postimg.cc/tRwgsTHL/Screenshot-2025-02-07-at-1-40-35-PM.png)
![Infxrence Screenshot 2](https://i.postimg.cc/wMCxZWV6/Screenshot-2025-02-07-at-1-41-25-PM.png)
Infxrence provides an up-to-date list of the models provided, as well as docs for demo API calls, and a download link to directly download the model.
### Agxnts
![Agxnt Screenshot](https://i.postimg.cc/xTgbpmJB/Screenshot-2025-02-07-at-7-55-17-PM.png)
![Agxnt Screenshot](https://i.postimg.cc/mkjJFjXb/Screenshot-2025-02-07-at-7-56-58-PM.png)
![Agxnt Screenshot](https://i.postimg.cc/SNZHSZYd/Screenshot-2025-02-07-at-7-57-05-PM.png)
With Agxnts, you can see the different Agxnts and example API calls. In this UI you will also be able to create and export workflows, which are chained-together agents that enable you to perform complex automations.
### Stxrage
![Stxrage Screenshot](https://i.postimg.cc/5tJrpDhx/Screenshot-2025-02-07-at-7-58-26-PM.png)
This is where users manage their stxrage and files. 
### Plxyground
![Plxyground Screenshot](https://i.postimg.cc/T35yQ4rH/Screenshot-2025-02-07-at-7-59-16-PM.png)
Plxyground allows users to test out different endpoints in a UI.
### Chxt
![Chxt Screenshot](https://i.postimg.cc/FKp2LQ9J/Screenshot-2025-02-07-at-8-16-25-PM.png)
Chxt is a full AI chat, stored on chain and powered by the Cxmpute Infxrence network.
        `,
    },
    {
        title: 'HOW TO GET INVOLVED WITH CXMPUTE',
        content: `
## Roadmap and Future Work
Cxmpute’s journey is just beginning, and our roadmap is structured to ensure a robust and dynamic rollout of our decentralized compute network:

- **Provider Onboarding:**  
  Aggressively recruit and onboard compute providers to build a globally distributed compute network.

- **User Engagement:**  
  Simultaneously attract and engage potential users to create a vibrant, demand-driven ecosystem.

- **Software Development:**  
  Finalize and optimize our platform software to ensure seamless integration and operation across the network.

- **Closed Beta:**  
  Launch a closed beta to rigorously test performance, security, and user experience before full-scale deployment.

- **Public Mainnet Launch:**  
  Roll out the public mainnet, making Cxmpute’s decentralized compute services widely available.

As we progress, we will continue to expand our service offerings, enhance security protocols, and foster strategic ecosystem partnerships—all guided by community feedback and decentralized governance principles.

# Get Involved

The whitepaper is [here](https://docs.google.com/document/d/1b229VmIYNMs3Y_jMrCTQw4U-apLNrYE5d5EKqq9eSDc/edit?usp=sharing). Getting involved is easy—just fill out [this form](https://tally.so/r/mKW2lk) if you're interested as a provider, or [this form](https://tally.so/r/w86DQY) if you're interested as a user/general interest, and feel free to visit [cxmpute.xyz](cxmpute.xyz).
        `,
    },


]


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



export default function ChxtPage() {

    const [runs, setRuns] = React.useState<number>(100);
    const [selectedChat, setSelectedChat] = React.useState<ChatDemo>(chatDemos[0]);

    return (
        <div className={styles.playground}>
            <div className={styles.left}>
                <div className={styles.playgroundHeader}>
                    <h1>
                        CHXT
                    </h1>
                    <div>
                        <select
                            id="modelAgentSelect"
                            name="modelAgentSelect"
                            onChange={() => setRuns(parseFloat((Math.random() * 99 + 1).toFixed(1)))}
                        >
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
                    <div className={styles.contentHeader}>
                        <div className={styles.modelStatus}>Warm</div>
                        <div className={styles.modelOpen}>
                            <img
                                src="/globe.svg"
                                alt="My Pods icon"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    filter: 'brightness(0) invert(1)',
                                }}
                            />
                            <div>Open</div>
                        </div>
                        <div className={styles.modelRuns}>
                            <img
                                src="/brain-electricity.svg"
                                alt="My Pods icon"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    filter: 'brightness(0) invert(1)',
                                }}
                            />
                            <div>{runs}M RUNS</div>
                        </div>
                    </div>
                    <Markdown className={styles.chatContent}>{selectedChat.content}</Markdown>
                </div>
                <div className={styles.playgroundFooter}>
                    <textarea
                        placeholder="Type your input here. Hit SHIFT+ENTER to send your input."
                        className={styles.chatInput}
                    />
                </div>
            </div>
            <div className={styles.right}>
                <button className={styles.createChat}>NEW CHXT</button>
                <div className={styles.chatList}>
                    {chatDemos.map((chatDemo, index) => (
                        <div
                            key={index}
                            className={styles.chatItem}
                            onClick={() => setSelectedChat(chatDemo)}
                        >
                            <div className={styles.chatName}>{chatDemo.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}