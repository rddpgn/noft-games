import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/header/Header";
import Cover from "../components/cover/Cover";
import MainAbout from "../components/main-about/MainAbout";
import MainHowItWorks from "../components/main-how-it-works/MainHowItWorks";
import MainFeatures from "../components/main-features/MainFeatures";
import MainMarketplace from "../components/main-marketplace/MainMarketplace";
import Footer from "../components/footer/Footer";
import smoothscroll from '../scripts/SmoothScroll';

const ID_GTAG = 'G-LBF3265JP3';

export default function Home() {
  return (
    <>
      <Head>
          <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
          <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${ID_GTAG}`}/>
          <script dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ID_GTAG}');`,
          }}/>
          <script dangerouslySetInnerHTML={{__html:smoothscroll}}/>
      </Head>

      <div className={styles.background_gradient}></div>
      <Header/>
      <Cover/>
      <div className={styles.content}>
          <MainAbout/>
          <MainHowItWorks/>
          <MainFeatures/>
          <MainMarketplace/>
      </div>
      <Footer/>
    </>
  )
}

/*
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js main-features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

 */
