import styles from './snippet.module.css'

interface SnippetProps {
    children: string;
}

export default function Snippet({ children }: SnippetProps) {

    return (
        <div className={styles.snippetContainer}>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    )
}