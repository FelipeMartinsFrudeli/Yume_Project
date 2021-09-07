import styles from '../styles/Home.module.css';

import HeadComponent from './components/Head';
import Footer from './components/Footer';

import TopWave from '../images/TopWave';

export default function Home() {
  return (
    <div className={styles.container}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      <main className={styles.main}>
        <HeadComponent/>
        <div className={styles.grid}>
          <div className={styles.block1}>
            <p className={styles.mainText}>Porque é preciso<br/>ensinar a <a style={{color:"#5393C0"}}>sonhar</a> </p>
            <p className={styles.Text2}>Uma plataforma para você aprender na prática<br/>enquanto se diverte.</p>
            <button>Jogar</button>
          </div>
          <div className={styles.block2}>
            <div className={styles.VR_Image}></div>
            <button className={styles.Informations}>?</button>
          </div>
        </div>
        <div className={styles.Video}>
          <button>▷</button>
          <div>
            <p style={{color: '#A0A0A0'}}>Saiba mais</p>
            <p style={{color:'#A561C5', fontSize:15, fontWeight:700}}>ASSISTIR O VIDEO</p>
          </div>
        </div>
        <div className={styles.appExample}>
          <div className={styles.cellphone}>
            <div className={styles.topWaveDetail}></div>
            <div className={styles.squareDetail}></div>
            <div className={styles.bottomWaveDetail}></div>
          </div>
          <div className={styles.textApp}>
            <h1>Metodologia</h1>
            <p>Você encontrará diversos materiais com os conteúdos<br/> 
            da sua escola aplicados para temas chave. Depois disso, você<br/> 
            poderá jogar os desafios propostos, solucionando mistérios<br/>
            e aprendendo muito no processo. Nesse caminho você<br/>
            contará com ajuda da Liza, uma inteligência artificial<br/> 
            criada para tirar suas dúvida</p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
