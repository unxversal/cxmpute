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
    
    return (
        <div className={styles.hero} >
        </div>
    );
};