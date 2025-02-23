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
            <ul className={styles.footerLink}>
                <li
                    onClick={() => {
                        window.open('https://x.com/cxmpute', '_blank');
                    }}
                >Twitter</li>
                <li
                    onClick={() => {
                        window.open('https://discord.com/invite/CJGA7B2zKT', '_blank');
                    }}
                >Discord</li>
                <li
                    onClick={() => {
                        window.open('https://www.youtube.com/@cxmputenetwork/', '_blank');
                    }}
                >Youtube</li>
                <li
                    onClick={() => {
                        window.open('https://github.com/unxversal', '_blank');
                    }}
                >Github</li>
            </ul>
            <ul className={styles.footerLink}>
                <li>Home</li>
                <li
                    onClick={() => {
                        window.open('https://www.joshuaokolo.xyz/blog/cxmpute101', '_blank');
                    }}
                >Cxmpute in 90 seconds</li>
                <li
                    onClick={() => {
                        window.open('https://drive.google.com/file/d/1JN7-61fcTdFn3OM5Z-pAXi1VEUmuLX8p/view?usp=sharing', '_blank');
                    }}
                >Whitepaper</li>
                <li
                    onClick={() => {
                        window.open('https://unxversal.github.io/', '_blank');
                    }}
                >Docs</li>
                <li
                    onClick={toggleDashboard}
                >Launch Demo App</li>
                <li>Get Updates</li>
            </ul>
            <ul
                className={styles.footerLink}
                onClick={() => {
                    window.location.href = 'https://github.com/cxmpute/cxmpute';
                }}
            >
                <li>GitHub</li>
            </ul>
        </div>
    );
}