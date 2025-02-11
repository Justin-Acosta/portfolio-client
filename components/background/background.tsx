import styles from './background.module.css'

interface BackgroundProps {
    children: string;
    backgroundColor: string;
    backgroundImage: string;
}

export default function Background({
    children, 
    backgroundColor,
    backgroundImage
    }: BackgroundProps) {

    return (
        <div className={`${styles.backgroundContainer}
        ${backgroundColor ? "": ""}`}>
                    {children}
        </div>
    )
}