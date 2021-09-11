import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
    return (
    <div>
      <Head>
          <title>Create Next App</title>
          <meta charSet="UTF-8"/>
      </Head>

    <div className={styles.Toolbox}>
    <Link href="/"><div className={styles.logo}></div></Link>
        <div className={styles.buttonSection}>
          <Link href="/Conteudos"><button>Conteúdos</button></Link>
          <Link href="/Desafios"><button>Desafios</button></Link>
          <Link href="/Login"><button className={styles.login}>Entrar</button></Link>
        </div>
      </div>
    </div>
  )
}