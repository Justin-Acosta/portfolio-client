import styles from './snippet.module.css'

interface SnippetProps {
    code: string;
}

export default function Snippet({ code }: SnippetProps) {

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