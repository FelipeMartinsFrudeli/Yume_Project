
import HeadComponent from './components/Head';
import Footer from './components/Footer';

import styles from '../styles/login.module.css';
import Link from 'next/link';

export default function Home() {
    return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      
      <div className={styles.Container}>
      <HeadComponent/>
        <div className={styles.Center}>
            <h1>Minha área</h1>
            <p>Insira seu email e senha</p>
          <form>
            <div className={styles.EmailFrame}><div className={styles.icon}></div><input type="text" id="fname" name="fname" placeholder="Email"/></div>
            <div className={styles.PasswordFrame}><div className={styles.icon}></div><input type="password" id="lname" name="lname" placeholder="Senha"/></div>
            <button className={styles.LastPassword}>Esqueçeu a senha?</button>
            <div className={styles.ButtonFrame}>
              <Link href="/404"><button type="submit">Entrar</button></Link>
            </div>
            <div className={styles.GoogleOption}>
            <Link href="/404"><button type="submit">
                <div className={styles.GoogleIcon}></div>
                <p>Ou entrar com o google</p></button></Link>
            </div>
            <div className={styles.CreateAccont}>
              <p>Não possui uma conta?</p>
              <Link href="/404"><button>Crie uma conta agora!</button></Link></div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}