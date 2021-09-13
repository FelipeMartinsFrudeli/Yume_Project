import styles from '../styles/Home.module.css';

import HeadComponent from './components/Head';
import Footer from './components/Footer';
import Link from 'next/link';


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
            <div style={{display:"flex"}}>
              <div className={styles.triangle0}></div>
            <div>
              <p className={styles.mainText}>Conectar para <a style={{color:"#37C2CA"}}>sonhar</a> </p>
              <p className={styles.Text2}>Um lugar para você desenvolver soft skills enquanto se diverte.</p>
              <Link href="/404"><button>Saiba Mais</button></Link>
            </div>
            </div>
          </div>
          <div className={styles.block2}>
            <div className={styles.VR_Image}>
            <div className={styles.triangle2}>
            </div>
            <Link href="/404"><button className={styles.Informations}>?</button></Link>
          </div>
        </div>
          <div className={styles.Video}>
          <Link href="https://www.youtube.com/watch?v=TF1oH2UC1l4"><button>▷</button></Link>
            <div>
              <p style={{color: '#A0A0A0'}}>Saiba<nobr/>&nbsp;mais</p>
              <p className={styles.text}>ASSISTIR O VIDEO</p>
            </div>
          </div>
        </div>
        <div className={styles.site}>
          <div className={styles.triangle}></div>
          <div className={styles.TextSite}>
            <h1>Yume</h1>
            <p>É uma plataforma onde você pode desenvolver soft<br/> 
            skills de uma forma interessante e divertida.<br/> 
            Completando desafios e atividades interativas, você<br/> 
            adquire habilidades que guiarão você através de<br/>
            uma jornada de autoconhecimento.</p>
          </div>
        </div>
        <div className={styles.softSkills}>
          <div className={styles.text}>
            <h1>Por que <a style={{color:'#37C2CA'}}>soft skills?</a></h1>
            <div className={styles.Text}>Soft skills são habilidades socioemocionais que são<br/> 
            desenvolvidas com experiências e convívio com outras pessoas.  Com o avanço da tecnologia, cada<br/>
            vez mais atividades passaram a ser online, assim, aos<br/> 
            poucos as soft skills foram esquecidas e as pessoas já<br/> 
            não mais se conectam, o que gera problemas em<br/> 
            ambientes de trabalho e relações sociais.</div>
          </div>
          <div className={styles.Polygon3}></div>
        </div>
        <div className={styles.Challengs}>
          <div className={styles.Top}>
            <h1><a style={{color:'#A561C5'}}>Desafios</a> disponíveis</h1>
            <p>Solucione problemas</p>
          </div>
          <div className={styles.Bottom}>
            <div className={styles.Card}>
              <div className={styles.Picture1}></div>
              <p>A queda das redes</p>
            </div>
            <div className={styles.Card}>
              <div className={styles.Picture2}></div>
              <p>Banco de digitais</p>
            </div>
            <div className={styles.Card}>
              <div className={styles.Picture3}></div>
              <p>A revolta dos peões</p>
            </div>
          </div>
        </div>
        <div className={styles.useGuide}>
          <div className={styles.text}>
            <h1>Saiba mais</h1>
            <p>Aqui você encontrará um pouco mais sobre a <br/> 
            plataforma da Yume e todas as suas funcionalidades! </p>
            <Link href="https://www.youtube.com/watch?v=TF1oH2UC1l4"><button>ASSISTIR</button></Link>
          </div>
          <div className={styles.Card}>
            <div className={styles.SquareDetail}>
            <iframe width="90%" height="90%" src="https://www.youtube.com/embed/TF1oH2UC1l4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
            <div className={styles.VideoCard}>
              
            </div>
          </div>
        </div>
        <div className={styles.Space}></div>

        <div className={styles.Footer}></div>
      </main>

      <Footer/>
    </div>
  )
}
