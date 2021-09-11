
import HeadComponent from './components/Head';
import styles from '../styles/login.module.css';

export default function Home() {
    return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      
      <div className={styles.Container}></div>
      <HeadComponent/>
        
    </div>
  )
}