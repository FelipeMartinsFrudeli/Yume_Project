import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
    return (
    <div>
      <Head>
          <title>Create Next App</title>
          <meta charset="UTF-8"/>
      </Head>
      <div className={styles.Toolbox}>
        <div className={styles.logo}></div>
        <div className={styles.buttonSection}>
          <button>Conteúdos</button>
          <button>Desafios</button>
          <button>Materiais</button>
          <button>Contato</button>
          <button className={styles.login}>Entrar</button>
        </div>
      </div>
    </div>
  )
}