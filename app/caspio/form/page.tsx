'use client'
import styles from './caspio.module.css'
import CaspioImbed from '@/components/caspio-imbed/caspio-imbed';
import Snippet from '@/components/snippet/snippet';

export default function Page() {

    return (
        <main>

            <h1>Caspio Form</h1>
            <article>
                <CaspioImbed URL='https://d2hcx566.caspio.com/dp/43aae000fe2fce60beb24ccfa573'></CaspioImbed>
            </article>

            <article>
                <h1>Component Code</h1>
                <Snippet>{`
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
            script.src = '\${URL}/emb';
            
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
                `}</Snippet>
            </article>

        </main>
    );
}