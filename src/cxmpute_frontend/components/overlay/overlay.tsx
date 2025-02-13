import * as React from 'react';
import styles from './overlay.module.css';
export const Overlay: React.FC = () => {
  return (
    <div className={styles.overlay}>
      {/* Center text */}
      <div>
        <div
          className= {styles.popups2}
          id='aboutPopup'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            color: "white",
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "90vh",
              borderRadius: "3px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div>
              <div className="hheader" style={{ fontFamily: "Potra",               pointerEvents: "none",
fontSize: "8vw" }}>CXMPUTE</div>
              <br />

              <div
                style={{
                  fontFamily: "Helvetica Neue",
                  fontSize: "15px",
                  fontWeight: "200",
                  pointerEvents: "none",

                }}
              >
                Decentralized Compute Infrastructure by{" "}
                <span style={{ fontFamily: "Anurati" }}>UNXVERSAL</span>
              </div>
              <br />
              <div
                id="cxmplist"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "200",
                  textAlign: "center",
                  padding: "5px",
                  maxWidth: "90vw",
                  pointerEvents: "none",
                }}
              >
                AI Training · AI Inference · Decentralized Storage · Decentralized Compute · Web3-Native Webdev · AI Agents · Verifiable Agents · Decentralized Research
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ul
          className="footer"
          style={{
            flex: "1 1 0%",
            fontSize: 12,
            lineHeight: "1em",
            textAlign: "right",
            color: "white",
            listStyle: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("https://drive.google.com/file/d/1rax3ujJv0Bw7Z30V3s9pDPC1Q0dhCoeG/view", "_blank");
          }}
        >
          <li>JOIN</li>
        </ul>
        <ul
          className="footer"
          style={{
            flex: "1 1 0%",
            fontSize: 12,
            lineHeight: "1em",
            textAlign: "right",
            color: "white",
            listStyle: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("https://github.com/unxversal/", "_blank");
          }}
        >
          <li>GITHUB</li>
        </ul>
        <ul
          className="footer"
          style={{
            flex: "1 1 0%",
            fontSize: 12,
            lineHeight: "1em",
            textAlign: "right",
            color: "white",
            listStyle: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("https://x.com/cxmpute", "_blank");
          }}
        >
          <li>TWITTER</li>
        </ul>
        
      </footer>
    </div>
  );
};

export default Overlay;
