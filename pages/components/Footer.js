import Head from 'next/head'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link';

export default function Home() {
    return (
    <div className={styles.footer}>
      <div className={styles.CardList}>
        <div className={styles.Card}>
          <div className={styles.imgLogo}></div>
        </div>
        <div className={styles.CardSobre}>
          <div className={styles.Card}>
            <h1>Sobre</h1>
            <Link href="/404"><button>Novidades</button></Link>
            <Link href="/404"><button>Nossa Equipe</button></Link>
            <Link href="/404"><button>Quem Somos</button></Link>
          </div>
        </div>
        <div className={styles.CardSuport}>
          <div className={styles.Card}>
            <h1>Suporte</h1>
            <Link href="/404"><button>Central de Ajuda</button></Link>
            <Link href="/404"><button>Recuperação de Contas</button></Link>
          </div>
        </div>
        <div className={styles.CardContacts}>
          <h1>Contatos</h1>
          <div className={styles.box}>
          <Link href="https://www.instagram.com/plataformayume/"><button><div className={styles.InstagramIcon}></div></button></Link>
            <Link href="/404" ><button><div className={styles.YoutubeIcon}></div></button></Link>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottom}>
        <p>© 2021 Yume</p>
        <Link href="/404"><button className={styles.useTerms}>Termos de uso</button></Link>
        <Link href="/404"><button className={styles.Privacity}>Política de privacidade</button></Link>
        <Link href="/404"><button className={styles.Cookies}>Aviso de cookies</button></Link>
      </div>
    </div>
  )
}