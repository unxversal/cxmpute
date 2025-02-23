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
              <div className={styles.description}>
                Use or provide computing power, storage, and more.
              </div>
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
            const processEl = document.getElementById("process");
            if (processEl) {
              processEl.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <li>JOIN</li>
        </ul>
        <ul
          className={styles.footerLink}
          onClick={() => {
            const processEl = document.getElementById("about");
            if (processEl) {
              processEl.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <li>ABOUT</li>
        </ul>
        <ul
          className={styles.footerLink}
          onClick={() => {
            window.open("https://unxversal.github.io/", "_blank");
          }}
        >
          <li>DOCS</li>
        </ul>
      </footer>

      <footer className={styles.footerContainer2}>
        <ul
          className={styles.footerLink2}
          onClick={() => {
            window.open("https://www.joshuaokolo.xyz/blog/cxmpute101", "_blank");
          }}
        >
          <li>CXMPUTE IN 90 SECONDS</li>
        </ul>

      </footer>

      
    </div>
  );
};

export default Overlay;
