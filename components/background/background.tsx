import styles from './background.module.css'

interface BackgroundProps {
    children: any;
    color?: string;
    imageURL?: string;
    gradient?: string;
}

export default function Background({
    children,
    color,
    imageURL,
    gradient
}: BackgroundProps) {



    return (
        <div
            className={styles.backgroundContainer}
            style={
                {backgroundColor: color || undefined,
                backgroundImage: `url(${imageURL})` || undefined,
                background: `linear-gradient(${gradient})`}
            }>
            {children}
        </div>
    )
}