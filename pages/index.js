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
            <p>Pós Doutorado na área de materiais</p>
            <p>Professor universitário área de exatas ou programação</p>
            <p>Indústria, área de materiais, desenvolvimento de produtos</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Habilidades &rarr;</h3>
            <ul>
              <li>Flexibilidade</li>
              <li>Autoconfiança e autoconhecimento</li>
              <li>Iniciativa</li>
              <li>Competitividade</li>
              <li>Visão no cliente</li>
              <li>Compreensão interpessoal e empatia</li>
              <li>Capacidade de liderança</li>
              <li>Persuasão</li>
              <li>Trabalho em Equipe</li>
              <li>Visão do negócio</li>
            </ul>
          </a>

          <a
            href="#" className={styles.card}>
            <h3>Formação &rarr;</h3>
            <ul>
              <li>Doutorado em Materiais para Engenharia, UNIFEI, MG</li>
              <li>Mestrado em Materiais para Engenharia, UNIFEI, MG</li>
              <li>Bacharelado em Física, IFUSP, USP, SP</li>
              <li>Licenciatura em Física, IFUSP, USP, SP</li>
            </ul>
          </a>

          <a
            href="#" className={styles.card}>
            <h3>Contato &rarr;</h3>
            <p>alexandre.lanza@gmail.com</p>
            <p>whatsapp: (19) 99660-5104</p>
            <p>Campinas - SP</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>PS: esta é a primeira versão (01/21), feita com NextJS, ReactJS e hospedada na Vercel através do GitHub.</p>     
      </footer>
    </div>
  )
}
