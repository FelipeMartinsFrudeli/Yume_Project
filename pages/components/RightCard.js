import style from '../../styles/Quest.module.css'

export default function ComParametro(props) {
    return (
        <div>
           <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&family=Poppins&display=swap" rel="stylesheet"/>
            <div className={style.Card}>
                <div className={style.RightText}>
                    {props.Titulo}
                    {props.Texto}
                </div>
                <div className={style.ImageBox}>
                    <div className={props.image}></div>
                </div>
            </div>
        </div>
    )
}