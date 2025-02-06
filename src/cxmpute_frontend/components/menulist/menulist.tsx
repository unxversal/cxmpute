import styles from './menulist.module.css';
import * as React from 'react';

interface MenuProps {
    setPage: (page: string) => void
}

export default function Menulist({setPage}: MenuProps) {
    return(
        <>
                <ul 
                    className={styles.menuList}>
            
                    <li
                        onClick={() => setPage('dashboard')}
                        
                    >
                        <img
                        src="/dashboard-dots.svg"
                        alt="Dashboard icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        DASHBOARD
                    </li>
                    
                    <li
                        onClick={() => setPage('myPods')}
                        
                    >
                        <img
                        src="/cube-scan.svg"
                        alt="My Pods icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        MY PODS
                    </li>
                    <li
                        onClick={() => setPage('podMarket')}
                        
                    >
                        <img
                        src="/money-square-solid.svg"
                        alt="Pod Market icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        POD MARKET
                    </li>
                    <li
                        onClick={() => setPage('serverless')}
                        
                    >
                        <img
                        src="/cloud-square-solid.svg"
                        alt="Serverless icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        SXRVERLESS
                    </li>
                    <li
                        onClick={() => setPage('infxrence')}
                        
                    >
                        <img
                        src="/brain-electricity.svg"
                        alt="Infxrence icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        INFXRENCE
                    </li>
                    <li
                        onClick={() => setPage('kxbernetes')}
                        
                    >
                        <img
                        src="/server.svg"
                        alt="Kxbernetes icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        KXBERNETES
                    </li>
                    <li
                        onClick={() => setPage('agxnts')}
                        
                    >
                        <img
                        src="/pen-tablet.svg"
                        alt="Agxnts icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        AGXNTS
                    </li>
                    <li
                        onClick={() => setPage('stxrage')}
                        
                    >
                        <img
                        src="/database.svg"
                        alt="Stxrage icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        STXRAGE
                    </li>
                    <li
                        onClick={() => setPage('daiArchxve')}
                        
                    >
                        <img
                        src="/database-solid.svg"
                        alt="dAI Archxve icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        dAI ARCHXVE
                    </li>
                    <li
                        onClick={() => setPage('playground')}
                        
                    >
                        <img
                        src="/open-in-browser.svg"
                        alt="Playground icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        PLXYGROUND
                    </li>
                    <li
                        onClick={() => setPage('chat')}
                        
                    >
                        <img
                        src="/telegram.svg"
                        alt="Chat icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        CHXT
                    </li>
                    <li
                        onClick={() => setPage('provider')}
                        
                    >
                        <img
                        src="/cpu.svg"
                        alt="Provider icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        PRXVIDER
                    </li>
                    <li
                        onClick={() => setPage('settings')}
                        
                    >
                        <img
                        src="/settings.svg"
                        alt="Settings icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px',
                            marginLeft: 0,
                            filter: 'brightness(0) invert(1)',
                        }}
                        />
                        <div>
                            SETTINGS
                        </div>
                    </li>
                    
                </ul>
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
                    <li>
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
                    <li>
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
        </>
    )
}