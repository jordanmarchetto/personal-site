import Head from 'next/head';
import styles from '../styles/Home.module.css'; 

export default function Home() {
  return (
    <>
    <Head>
      <title>Jordan Marchetto</title>
    </Head>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Jordan Marchetto</h1>
      <hr className={styles.divider} />
      <p className={styles.details}><strong>Senior Software Engineer / Tech Lead</strong> &middot; <a href="mailto:contact@jordanmarchetto.com">contact@jordanmarchetto.com</a> </p>
    </div>
    </>

  )
}
