import Typewriter from 'typewriter-effect';

function BannerFoto(){
    return (
        <div className="Banner">
            <img src="./imgs/home-bg.jpg" alt='Já.'/>
            <div className='AboutWrap'>
                <p className='AboutMeText'>Jsem studentem magisterského programu Audioinženýrství na VUT v Brně. Mimo zvuku a hudby mě baví cokoliv kreativního, od mala jsem si hrál s Photoshopem a podobnými programy. V posledních letech jsem v oblasti grafiky získal zkušenosti při kresbě a designu motivů oblečení a nebo například při zajištění grafické stránky největší vzpěračské soutěže na území ČR v roce 2023 - Czech Weightlifting Open.  Kromě grafiky mě baví focení, práce s videem. Ve volném čase se také věnuji výrobě elektrických kytar.
                </p>
                <Typewriter
                    options={{
                        strings: ['- TOMÁŠ MALCHER.', ''],
                        autoStart: true,
                        loop: true,
                    }}
                /> 
            </div>
        </div>
        
    )
} 

export default BannerFoto;
