import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexandre Lanza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alexandre Lanza
        </h1>

        <p className={styles.description}>
          História Profissional
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Interesses &rarr;</h3>
            <p>...</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Habilidades &rarr;</h3>
            <p>...</p>
          </a>

          <a
            href="#" className={styles.card}>
            <h3>Formação &rarr;</h3>
            <p>...</p>
          </a>

          <a
            href="#" className={styles.card}>
            <h3>Projetos Atuais &rarr;</h3>
            <p>...</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Devo agradecer</p>
        <br>
        <ul>
          <li><a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a></li>
        <li><a href="https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw"><img src="https://yt3.ggpht.com/ytc/AAUvwnjmOwHGXldA8NPXJ4vIFtA4334qT5fspJMPoM4p=s88-c-k-c0x00ffffff-no-rj"></img></a>Filipe Deschampse seus vídeos</li>
        </ul>        
      </footer>
    </div>
  )
}
