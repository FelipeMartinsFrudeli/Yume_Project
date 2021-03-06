
import HeadComponent from './components/Head';
import Footer from './components/Footer';

import styles from '../styles/Conteudo.module.css';
import Link from 'next/link';

export default function Home() {
    return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      
      <div className={styles.Container}>
      <HeadComponent/>
        <div className={styles.Card}>
            <div className={styles.Text}>
              <h1>Conteúdos</h1>
              <p>Aprenda mais sobre como desenvolver habilidades<br/>
              socioemocionais e ter uma melhor relação consigo<br/> 
              e com outras pessoas.</p>
            </div>
            <div className={styles.Box}><div className={styles.TriangleDetail}></div></div>
        </div>
          <h1 className={styles.Title}>Ebooks</h1>
        <div className={styles.Grid}>
          <div className={styles.Collum1}>
            <div className={styles.MiniCard}>
              <div className={styles.image1}></div>
              <h1>Networking</h1>
              <p>Ter um bom networking é<br/> 
              importante para trazer uma<br/>
              visibilidade para seu trabalho e<br/> 
              garantir boas oportunidades.</p>
              <Link href="https://drive.google.com/file/d/1qnkDgiJm40JLV2pecESYGhFNoYsmy9P7/view?usp=sharing"><button className={styles.Dowload}>Baixar</button></Link>
            </div>
            <div className={styles.MiniCard}>
              <div className={styles.image2}></div>
              <h1>Liderança</h1>
              <p>Você sabia que saber se<br/> 
              comunicar bem é uma<br/>
              importante habilidade para<br/> 
              manter relacionamentos saudáveis<br/>
              e duradouros?</p>
              <Link href="https://drive.google.com/file/d/16H08WhIvtx-YvqrYjCfp2AOYXHQfXg66/view?usp=sharing"><button className={styles.Dowload}>Baixar</button></Link>
            </div>
          </div>
          <div className={styles.Collum2}>
            <div className={styles.MiniCard}>
              <div className={styles.image1}></div>
              <h1>Comunicação</h1>
              <p>Ser um bom lider é essencial <br/> 
              para manter o engajamento e <br/>
              bom funcionamento de equipes,<br/> 
              além de ser uma importante <br/>
              para o empreendedorismo.</p>
              <Link href="https://drive.google.com/file/d/1wfkjV8AehQ8lh8Mfk1GVlyyRcPx-ECRY/view?usp=sharing"><button className={styles.Dowload}>Baixar</button></Link>
            </div>
            <div className={styles.MiniCard}>
              <div className={styles.image2}></div>
              <h1>Criatividade</h1>
              <p>Criatividade é uma habilidade<br/> 
              muito importante para o<br/>
              mercado de trabalho e para a<br/> 
              sua vida, pois permite que você<br/>
              crie soluções originais.</p>
              <Link href="https://drive.google.com/file/d/1hGKGovbk__aai0hWRWSptwKtGLmfhmAz/view?usp=sharing"><button className={styles.Dowload}>Baixar</button></Link>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  )
}