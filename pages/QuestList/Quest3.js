import HeadComponent from '../components/Head';
import Footer from '../components/Footer';
import Link from 'next/link';

import Card from '../components/Card';
import QuestCard from './QuestModel';

import style from '../../styles/Quest.module.css'
import React,{ useState } from 'react';
import $ from 'jquery';


export default function Home() {
    let ListResults = [1,2,3,3]

    var [points] = useState(1);
    function ResumeGame() {
        let x=1
        while(x<=4) {
            let div = `Card${x}`
            if(document.getElementById(div).value != undefined) {
                let value = document.getElementById(div).value
                if (value==ListResults[x]) {
                    points = points + x
                    console.log(points)
                    $(document.getElementById("total")).html(`${points}/4`);
                }
            }
            x++
        }
        points = 0;
    }

    return (
        <div>
            <HeadComponent/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
            <div className={style.Container}>
                <Card 
                    image={style.GhostIcon} 
                    Titulo={<h1>Procura-se <a style={{color:'#37C2CA'}}>memórias</a></h1>}
                    Texto={<div className={style.SecondText}><p>Durante uma expedição arqueológica, você encontra um<br/>
                        fantasma que perdeu as memórias de quem foi em vida.<br/>
                        Explore cenários, descubra segredos da sua história e ajude-o<br/>
                        a descansar em paz, após descobrir quem ele realmente é.</p>
                        <p>Nesse quiz, você se deparará com 5 problemas que se passam<br/> 
                        dentro desse dilema. Pense como usar as soft skills para<br/> 
                        solucionar os desafios da melhor maneira possível</p></div>}
                />
                <QuestCard
                    id='Card1'
                    value='0'
                    Title={<h1 style={{color:'#A561C5'}}>Qual a melhor escolha?</h1>}
                    Description={<p>Você estava conversando com seus amigos na Redegram,<br/>
                    quando as redes sociais cairam. Você vai até a casa do seu<br/> 
                    amigo e ele está em pânico, o que você deve fazer?</p>}
                    OptionA={<p>Ligar para a ambulância.</p>}
                    OptionB={<p>Tentar acalmá-lo conversando com ele e contatando a família dele.</p>}
                    OptionC={<p>Dizer a ele que entrar em pânico por algo assim é desnecessário e<br/> 
                    exagero. Além de orientá-lo a deixar de se fingir para chamar atenção.</p>}
                    DescriptionStyle={style.BlackDescription}
                />
                <QuestCard
                    id='Card2'
                    value='0'
                    Title={<h1 style={{color:'#A561C5'}}>Qual a melhor escolha?</h1>}
                    Description={<p>Você está contando o quanto você está empolgado com ter sido<br/>
                    convidado para ajudar na solução do problema da queda das redes.</p>}
                    OptionA={<p>Manter a calma e falar calmamente, sem muita entonação, em posição<br/> 
                    em posição estática e lembrar de não abrir a boca demais.</p>}
                    OptionB={<p>Mostrar o quanto está empolgado, por meio da entonação da voz,<br/>
                    movimentos corporais e olhando nos olhos de quem está ouvindo.</p>}
                    OptionC={<p>Não expressar sua empolgação, simplesmente não falando<br/> 
                    nada sobre o assunto em questão</p>}
                    DescriptionStyle={style.BlackDescription}
                />
                <QuestCard
                    id='Card3'
                    value='0'
                    Title={<h1 style={{color:'#A561C5'}}>Como agir?</h1>}
                    Description={<p>Durante a sua investigação sobre os causadores da queda das<br/>
                     redes, você se depara com um problema que a única pessoa que<br/>
                     sabe resolver, é alguém que você já brigou anteriormente.</p>}
                    OptionA={<p>Não pedir ajuda para essa pessoa e tentar resolver sozinho</p>}
                    OptionB={<p>Entrar em contato com a pessoa e humildimente pedir ajuda nesse<br/>
                    problema, evitando confrontos sobre o ocorrido.</p>}
                    OptionC={<p>Pedir ajuda, mas esperar apenas algum comentário sobre o ocorrido<br/> 
                    para reater uma discussão.</p>}
                    DescriptionStyle={style.BlackDescription}
                />
                <QuestCard
                    id='Card4'
                    value='0'
                    Title={<h1 style={{color:'#A561C5'}}>Qual a melhor escolha?</h1>}
                    Description={<p>Após semanas de trabalho, você vai apresentar a solução que<br/>
                    desenvolveu para a sua chefe, mas ela não está com tempo para<br/> 
                    uma reunião essa semana.</p>}
                    OptionA={<p>Observar a rotina dela nas redes sociais e entrar em contato em um horário<br/> 
                    de almoço ou que você sabe que ela está disponível.</p>}
                    OptionB={<p>Explicar que a sua apresentação é urgente e que você pode fazer uma<br/>
                    apresentação mais curta para apresentar nessa semana.</p>}
                    OptionC={<p>Mandar um e-mail com um resumo do que você falaria na apresentação e<br/> 
                    marcar uma reunião mais curta em um horário conveniente para ela.</p>}
                    DescriptionStyle={style.BlackDescription}
                />
                <button className={style.submitButton} onClick={()=>ResumeGame()}>Verificar respostas</button>
                <div className={style.Card}>
                    
                    <div className={style.FinalText}>
                        <h1>Desenpenho</h1>
                        <h1 className={style.FinalDescription} id="total">/4</h1>
                        <p>Parabéns, você teve um ótimo desempenho!<br/> 
                        Que tal aprender um pouco mais, lendo os<br/>
                        materiais que disponibilizamos?</p>
                        <button className={style.EbookButton}>Ler Ebook</button>
                    </div>
                    <div className={style.FinalImageBox}>
                        <div className={style.Rocket}></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}