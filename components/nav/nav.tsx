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
                    href={'/case-studies'}>
                    Case Studies
                </Link>
                <Link
                    onClick={toggleIsExpanded}
                    className={styles.link}
                    href={'/caspio'}>
                    Caspio
                </Link>
            </nav>
        </>
    )
}