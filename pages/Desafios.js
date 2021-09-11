import HeadComponent from './components/Head';
import Footer from './components/Footer';

import styles from '../styles/Desafios.module.css';

export default function Home() {
    return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      <HeadComponent/>
      <div className={styles.Container}>
        <div className={styles.Card}>
            <div className={styles.RobotImage}></div>
            <div className={styles.Text}>
                <h1>A queda das <a style={{color:'#37C2CA'}}>redes</a></h1>
                <p>Em um dia fatídico, todas as redes sociais cairam, o mundo<br/> 
                entrou em pânico e ainda não se sabe quem causou essa<br/> 
                fatalidade. Você e sua equipe foram encarregados de<br/> 
                desvendar esse mistério, para isso você terá de seguir as<br/> 
                pistas pessoalmente. </p>
                <div className={styles.TopicCards}>
                    <button>Fisica</button>
                    <button>Geografia</button>
                    <button>Programação</button>
                    <button>Resolução de problemas</button>
                    <button>Tecnologias 5G</button>
                    <button>Tomadas de decisões</button>
                    <button>Comunicação</button>
                </div>
                <div className={styles.PlayButton}>
                    <button>Jogar</button>
                </div>
            </div>
        </div>
        <div className={styles.RightAdjust}>
            <div className={styles.FingerCard}>
                <div className={styles.Card}>
                    <div className={styles.Text}>
                        <h1>A queda das redes</h1>
                        <p>Em um dia fatídico, todas as redes sociais cairam, o mundo<br/> 
                        entrou em pânico e ainda não se sabe quem causou essa<br/> 
                        fatalidade. Você e sua equipe foram encarregados de<br/> 
                        desvendar esse mistério, para isso você terá de seguir as<br/> 
                        pistas pessoalmente. </p>
                        <div className={styles.TopicCards}>
                            <button>Fisica</button>
                            <button>Geografia</button>
                            <button>Programação</button>
                            <button>Resolução de problemas</button>
                            <button>Tecnologias 5G</button>
                            <button>Tomadas de decisões</button>
                            <button>Comunicação</button>
                        </div>
                        <div className={styles.PlayButton}><button>Jogar</button></div>
                        
                    </div>
                    <div className={styles.FingerPrintImage}></div>
                </div>
            </div>
        </div>
        <div className={styles.GhostCard}>
          <div className={styles.Card}>
              <div className={styles.GhostIcon}></div>
              <div className={styles.Text}>
                  <h1>Procura-se <a style={{color:'#37C2CA'}}>memórias</a></h1>
                  <p>Durante uma expedição arqueológica, você encontra um<br/> 
                  fantasma que perdeu as memórias de quem foi em vida.<br/> 
                  Explore cenários, descubra segredos da sua história e ajude-o<br/> 
                  a descansar em paz, após descobrir quem ele realmente é. </p>
                  <div className={styles.TopicCards}>
                      <button>Empatia</button>
                      <button>Resolução de problemas</button>
                      <button>História</button>
                      <button>Raciocinio lógico</button>
                      <button>Comunicação</button>
                  </div>
                  <div className={styles.PlayButton}>
                      <button>Jogar</button>
                      <div className={styles.AreaPart}><div className={styles.TrianglePart}></div></div>
                  </div>
              </div>
          </div>
        </div>
        
        <div className={styles.RightAdjust}>
          <div className={styles.ChessCard}>
            <div className={styles.Card}>
                <div className={styles.Text}>
                    <h1>A <a style={{color:'#37C2CA'}}>revolta</a> dos peões</h1>
                    <p>É ano de 1789 e você e sua equipe são<br/> 
                    líderes da Revolução Francesa. Para<br/> 
                    garantir o melhor futuro possível, vocês<br/> 
                    terão de lidar com questões políticas e<br/> 
                    sociais. Lembrem-se, suas escolhas<br/> 
                    podem mudar o final dessa história </p>
                    <div className={styles.TopicCards}>
                        <button>Fisica</button>
                        <button>Geografia</button>
                        <button>Programação</button>
                        <button>Resolução de problemas</button>
                        <button>Tecnologias 5G</button>
                        <button>Tomadas de decisões</button>
                        <button>Comunicação</button>
                    </div>
                    <div className={styles.PlayButton}><button>Jogar</button></div>
                </div>
                <div className={styles.AreaChess}>
                    <div className={styles.ChessIcon}></div>
                </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}