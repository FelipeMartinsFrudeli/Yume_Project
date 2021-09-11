import HeadComponent from './components/Head';
import Footer from './components/Footer';

import style from '../styles/ErrorPage.module.css'

export default function Home() {
    return (
        <div>
            <HeadComponent/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
            <div className={style.Container}>
                <div className={style.image}></div>
                <h1>Oops... Algum erro aconteceu! Recarregue a pagina ou volte ao menu pricipal.</h1>
            </div>
            <div className={style.FooterBox}><Footer/></div>
        </div>
    )
}