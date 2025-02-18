"use client"
import styles from './nav.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { pallet } from '../../app/utilities'

export default function Nav() {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleIsExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            <div
                onClick={toggleIsExpanded}
                className={styles.menuButton}>
            </div>
            <nav
                className={`${styles.navContainer} ${isExpanded ? styles.expanded : ''}`}>
                <Link
                    onClick={toggleIsExpanded}
                    className={styles.link}
                    href={'/'}>
                    Home
                </Link>
                <Link
                    onClick={toggleIsExpanded}
                    className={styles.link}
                    href={'/modular-design'}>
                    Modular Design
                </Link>
                <Link
                    onClick={toggleIsExpanded}
                    className={styles.link}
                    href={'/responsive-design'}>
                    Responsive Design
                </Link>
            </nav>
        </>
    )
}