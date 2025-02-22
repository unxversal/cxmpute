import * as React from 'react';
import styles from './overlay.module.css';

export const Overlay: React.FC = () => {
  return (
    <div className={styles.overlay}>

      
      
      {/* Center text */}
      <div>
        <div className={styles.popups2} id="aboutPopup">
          <div className={styles.popupContent}>
            <div>
              <div className={styles.hheader}>CXMPUTE</div>
              <br />
              {/* <div className={styles.description}>
                Decentralized Compute Infrastructure by{" "}
                <span className={styles.brand}>UNXVERSAL</span>
              </div> */}
              <br />
              <div id="cxmplist" className={styles.cxmplist}>
                Virtual Machines · Codespaces · AI Training · AI Inference · Databases · AI Agents · Python Notebooks · Serverless · Kubernetes · AI Archive · Vector Search · More
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footerContainer}>
        <ul
          className={styles.footerLink}
          onClick={() => {
            window.open("https://drive.google.com/file/d/1rax3ujJv0Bw7Z30V3s9pDPC1Q0dhCoeG/view", "_blank");
          }}
        >
          <li>JOIN</li>
        </ul>
        <ul
          className={styles.footerLink}
          onClick={() => {
            window.open("https://github.com/unxversal/", "_blank");
          }}
        >
          <li>ABOUT</li>
        </ul>
        <ul
          className={styles.footerLink}
          onClick={() => {
            window.open("https://x.com/cxmpute", "_blank");
          }}
        >
          <li>DOCS</li>
        </ul>
      </footer>

      {/* <footer className={styles.footerContainer2}>
        <ul
          className={styles.footerLink}
          onClick={() => {
            window.open("https://drive.google.com/file/d/1rax3ujJv0Bw7Z30V3s9pDPC1Q0dhCoeG/view", "_blank");
          }}
        >
          <li>X PROVIDERS</li>
        </ul>
        <ul
          className={styles.footerLink}
          onClick={() => {
            window.open("https://github.com/unxversal/", "_blank");
          }}
        >
          <li>X GB CXMPUTE</li>
        </ul>
        <ul
          className={styles.footerLink}
          onClick={() => {
            window.open("https://x.com/cxmpute", "_blank");
          }}
        >
          <li>X SERVICES</li>
        </ul>
      </footer> */}

      
    </div>
  );
};

export default Overlay;
