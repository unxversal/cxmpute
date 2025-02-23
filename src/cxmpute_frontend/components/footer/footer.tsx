import styles from './footer.module.css';
import * as React from 'react';

type FooterProps = {
    toggleDashboard: () => void;
};

export default function Footer({ toggleDashboard }: FooterProps) {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerText}>
                <h1 className={styles.footerText2}>CXMPUTE</h1>
            </div>
            <div className={styles.footerButtons}>
                <ul
                    className={styles.footerLink}
                    onClick={() => {
                        window.location.href = 'https://github.com/cxmpute/cxmpute';
                    }}
                >
                    <li>GET STARTED AS A PROVIDER</li>
                    <li>GET STARTED AS A USER</li>
                    <li>GET UPDATES</li>
                </ul>
                <ul className={styles.footerLink}>
                    <li
                        onClick={() => {
                            window.open('https://x.com/cxmpute', '_blank');
                        }}
                    >TWITTER</li>
                    <li
                        onClick={() => {
                            window.open('https://discord.com/invite/CJGA7B2zKT', '_blank');
                        }}
                    >DISCORD</li>
                    <li
                        onClick={() => {
                            window.open('https://www.youtube.com/@cxmputenetwork/', '_blank');
                        }}
                    >YOUTUBE</li>
                    <li
                        onClick={() => {
                            window.open('https://github.com/unxversal', '_blank');
                        }}
                    >GITHUB</li>
                </ul>
                <ul className={styles.footerLink}>
                    <li>HOME</li>
                    <li
                        onClick={() => {
                            window.open('https://www.joshuaokolo.xyz/blog/cxmpute101', '_blank');
                        }}
                    >CXMPUTE 101</li>
                    <li
                        onClick={() => {
                            window.open('https://drive.google.com/file/d/1JN7-61fcTdFn3OM5Z-pAXi1VEUmuLX8p/view?usp=sharing', '_blank');
                        }}
                    >WHITEPAPER</li>
                    <li
                        onClick={() => {
                            window.open('https://unxversal.github.io/', '_blank');
                        }}
                    >DOCS</li>
                    {/* <li
                        onClick={toggleDashboard}
                    >LAUNCH DEMO APP</li> */}
                
                </ul>
            </div>

        </div>
    );
}