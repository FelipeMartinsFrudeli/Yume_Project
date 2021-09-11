import Head from 'next/head'
import styles from '../../styles/Footer.module.css'

export default function Home() {
    return (
    <div className={styles.footer}>
      <div className={styles.CardList}>
        <div className={styles.Card}>
          <div className={styles.imgLogo}></div>
        </div>
        <div className={styles.Card}>
          <h1>Sobre</h1>
          <button>Novidades</button>
          <button>Nossa Equipe</button>
          <button>Quem Somos</button>
        </div>
        <div className={styles.Card}>
          <h1>Suporte</h1>
          <button>Central de Ajuda</button>
          <button>Recuperação de Contas</button>
        </div>
        <div className={styles.CardContacts}>
          <h1>Contatos</h1>
          <div className={styles.box}>
            <button><div className={styles.InstagramIcon}></div></button>
            <button><div className={styles.YoutubeIcon}></div></button>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottom}>
        <p>© 2021 Yume</p>
        <button className={styles.bottom}>Termos de uso</button>
        <button className={styles.bottom}>Política de privacidade</button>
        <button className={styles.bottom}>Aviso de cookies</button>
      </div>
    </div>
  )
}