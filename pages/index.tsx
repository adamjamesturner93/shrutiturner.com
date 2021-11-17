import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import UnderConstruction from '../images/under_construction.svg';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shruti Turner | Website under construction</title>
        <meta name="description" content="Website under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Website under construction</h1>

        <p className={styles.description}>
          I'm afraid this website is currently still under construction.
        </p>

        <Image src={UnderConstruction} alt={'Under construction'} />
      </main>

      <footer className={styles.footer}>&copy;2021 - Adam Turner</footer>
    </div>
  );
};

export default Home;
