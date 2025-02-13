import styles from './snippet.module.css'
import {pallet} from '../../app/utilities'

interface SnippetProps {
    children: string;
}

export default function Snippet({ children }: SnippetProps) {

    return (
        <div 
            className={styles.snippetContainer}
            style={{backgroundColor: pallet.primary}}>
            <pre>
                <code>
                    {children}
                </code>
            </pre>
        </div>
    )
}