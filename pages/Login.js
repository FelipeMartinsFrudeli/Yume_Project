
import HeadComponent from './components/Head';
import styles from '../styles/login.module.css';

export default function Home() {
    return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      <HeadComponent/>
      <div className={styles.Page}>
        <div className={styles.Square1}></div>
        <div className={styles.Container}>
            <h1>Minha área</h1>
            <p>Insira seu email e senha</p>
          <form action="/login-validate" method="post">
            <div className={styles.EmailFrame}><div className={styles.icon}></div><input type="text" id="fname" name="fname" placeholder="Email"/></div>
            <div className={styles.PasswordFrame}><div className={styles.icon}></div><input type="password" id="lname" name="lname" placeholder="Senha"/></div>
            <button className={styles.LastPassword}>Esqueçeu a senha?</button>
            <div className={styles.ButtonFrame}>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
        <div className={styles.Square2}></div>
      </div>
    </div>
  )
}