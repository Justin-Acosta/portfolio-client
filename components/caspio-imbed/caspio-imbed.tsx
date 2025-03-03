'use client'
import styles from './caspio-imbed.module.css'
import { useEffect } from 'react';

interface CaspioImbedProps {
    URL: string;
}

export default function CaspioImbed({URL}:CaspioImbedProps) {

    useEffect(() => {
        // Find the target div where the script should be placed
        const caspioDiv = document.getElementById("caspioDiv");

        if (caspioDiv) {

            // Create script element
            const script = document.createElement("script");
            script.async = true
            script.type = "text/javascript";
            script.src = `${URL}/emb`;
            
            // Append script inside the target div
            caspioDiv.appendChild(script);
            
            return () => {
                // Cleanup script on unmount
                caspioDiv.removeChild(script);
            };
        }
    }, [URL]);

    return (
        <div id='caspioDiv' className={styles.caspioImbed}></div>
    );
}