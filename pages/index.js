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
        <p>PS: Ainda atualizando, me desculpe!</p>     
      </footer>
    </div>
  )
}
