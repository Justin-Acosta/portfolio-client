'use client'
import Link from 'next/link'
import styles from './caspio.module.css'
import CaspioImbed from '@/components/caspio-imbed/caspio-imbed';
import Snippet from '@/components/snippet/snippet';

export default function Page() {

    return (
        <main>

            <h1>Caspio</h1>
            <Link
                className={styles.link}
                href={'caspio/form'}>
                <article>
                    <h1>Form</h1>
                </article>
            </Link>

        </main>
    );
}