import styles from './agxntspage.module.css';
import * as React from 'react';

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
  

export default function AgxntsPage() {

    const [popupModel, setPopupModel] = React.useState<string | null>(null);
    
    const openPopup = (model: string) => {
        setPopupModel(model);
    };

    const closePopup = () => {
        setPopupModel(null);
    };


    return (
        <div className={styles.podspage}>
            <div className={styles.header}>
                <div className={styles.title}>INFXRENCE</div>
            </div>
            <div className={styles.pods}>
                {agents.map((agent, index) => (
                    <div className={styles.pod}>
                        <div className={styles.podName}>
                            <img
                                src={`/${agent.replace(/\s+/g, '-')}.svg`}
                                alt="Model Icon"
                                style={{
                                width: '5vw',
                                height: '5vw',
                                marginRight: '8px',
                                marginLeft: 0,
                                marginBottom: 0,
                                filter: 'brightness(0) invert(1)',
                                }}
                            />
                            {agent.toUpperCase()}</div>
                        <div className={styles.podPrice}>
                            <a
                                href="https://unxversal.github.io/modeldocs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={styles.docsButton}>DOCS</button>
                            </a>
                            <button
                                className={styles.sampleRequestButton}
                                onClick={() => openPopup(agent)}
                            >
                                SAMPLE REQUEST
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {
            // popupModel && (
            //     <div className={styles.popupOverlay} onClick={closePopup}>
            //     <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            //         <h2>Sample API Request</h2>
            //         <p>This is a sample API request for model:</p>
            //         <p className={styles.popupModelName}>{popupModel}</p>
            //         {/* You can add more details or an actual request example here */}
            //         <button className={styles.closePopup} onClick={closePopup}>
            //         Close
            //         </button>
            //     </div>
            //     </div>
            // )
            }

        </div>
    );
};