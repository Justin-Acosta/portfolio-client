import styles from './case-studies.module.css'
import Link from 'next/link'

export default function Page() {
    return (
        <main>

            <h1>Case Studies</h1>

            <section>
                <Link
                    className={styles.link}
                    href={'case-studies/modular-design'}>
                    <article>
                        <h1>Modular Design</h1>
                        <p>I explore how I can create reusable, easy to
                            code for client-side applications.</p>
                    </article>
                </Link>
                <Link
                    className={styles.link}
                    href={'case-studies/responsive-design'}>
                    <article>
                        <h1>Responsive Design</h1>
                        <p>Recording my thoughts about designing a 
                            mobile-first application.</p>
                    </article>
                </Link>
                <Link
                    className={styles.link}
                    href={'case-studies/api-requests'}>
                    <article>
                        <h1>API Requests</h1>
                        <p>Breaking down the stages of an API request
                            starting and ending with the client.</p>
                    </article>
                </Link>
            </section>

        </main>
    );
}