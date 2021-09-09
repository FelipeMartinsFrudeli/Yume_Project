import styles from '../styles/Home.module.css';

import HeadComponent from './components/Head';
import Footer from './components/Footer';


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
              <button>Saiba Mais</button>
            </div>
            </div>
          </div>
          <div className={styles.block2}>
            <div className={styles.VR_Image}>
            <div className={styles.triangle2}>
            </div>
            <button className={styles.Informations}>?</button>
          </div>
        </div>
          <div className={styles.Video}>
            <button>▷</button>
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
              <p>A revolta dos peões</p>
            </div>
            <div className={styles.Card}>
              <div className={styles.Picture3}></div>
              <p>A revolta dos peões</p>
            </div>
          </div>
        </div>
        <div className={styles.useGuide}>
          <div className={styles.text}>
            <h1>Guia de <a style={{color:'#37C2CA'}}>uso</a></h1>
            <p>Aqui você encontrará um guia de como usar a<br/> 
            plataforma da Yume e todas as suas funcionalidades!</p>
            <button>ASSISTIR</button>
          </div>
          <div className={styles.Card}>
            <div className={styles.SquareDetail}></div>
            <div className={styles.VideoCard}></div>
          </div>
        </div>
        <div className={styles.Polygon4}></div>
        <div className={styles.Vr_Project}>
          <div className={styles.image}></div>
          <div className={styles.TextSite}>
            <h1>Realidade <a style={{color:'#A561C5'}}>Virtual</a></h1>
            <p>Nos desafios da Yume, você pode interagir com<br/> 
              cenários desafiadores utilizando REALIDADE VIRTUAL,<br/> 
              que tornará sua experiência e seu aprendizado<br/> 
              inesquecíveis. </p>
          </div>
        </div>

        <div className={styles.Footer}></div>
      </main>

      <Footer/>
    </div>
  )
}
