import styles from '../styles/Heading.module.css';
import Link from 'next/link';
import Head from 'next/head';
const Heading = ({pageTitle}) => {
    return (
        <>
            <Head>
                <title>{pageTitle ? pageTitle + " | Jordan Marchetto" : "Jordan Marchetto"}</title>
                <meta name="description" content="Career and contact information for web developer, Jordan Marchetto" />
            </Head>
            <div className={styles.heading_wrapper}>
            <Link href="/" passHref>
                <h1 className={styles.heading}>Jordan Marchetto</h1>
            </Link>
        </div>
        </>
    );
}

export default Heading;