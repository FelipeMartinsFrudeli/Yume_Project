import $ from 'jquery';
import React from 'react';
import Link from 'next/link';

import style from '../../styles/Quest.module.css'

export default function Home(props) {
    var lastButton = null
    function CounterPoint(number, buttonOption) {
        if (lastButton != null) {
            $(document.getElementById(lastButton)).css({"background-color": "#ebebeb", "color": "#444"})
        }
        lastButton = buttonOption
        let button = document.getElementById(props.id)
        button.value = number
        $(document.getElementById(buttonOption)).css({"background-color": "#A561C5", "color": "#fff"})
        $(document.getElementById(buttonOption)).fadeOut(70).fadeIn(70).fadeOut(70).fadeIn(100)
    }

    return (
        <div id={props.id}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet"/>
            <div className={style.CardQuest}>
                <div className={style.TitleQuest}>{props.Title}</div>
                <div className={props.DescriptionStyle}>
                    {props.Description}
                </div>
                <div className={style.Options}>
                    <button id={`button1_${props.id}`} onClick={()=>CounterPoint(1,`button1_${props.id}`)}>{props.OptionA}</button>
                    <button id={`button2_${props.id}`} onClick={()=>CounterPoint(2,`button2_${props.id}`)}>{props.OptionB}</button>
                    <button id={`button3_${props.id}`} onClick={()=>CounterPoint(3,`button3_${props.id}`)}>{props.OptionC}</button>
                </div>
            </div>
        </div>
    )
}