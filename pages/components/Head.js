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
          <button>Conteúdos</button>
          <Link href="/Desafios"><button>Desafios</button></Link>
          <button>Materiais</button>
          <button>Quem<nobr/>&nbsp;somos</button>
          <Link href="/Login"><button className={styles.login}>Entrar</button></Link>
        </div>
      </div>
    </div>
  )
}