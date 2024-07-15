import Typewriter from 'typewriter-effect';

function BannerFoto(){
    return (
        <div className="Banner">
            <img src="./imgs/home-bg.jpg" alt='Já.'/>
            <Typewriter
                options={{
                    strings: ['TOMÁŠ MALCHER', 'Grafik', 'Designer'],
                    autoStart: true,
                    loop: true,
                }}
            /> 
        </div>
        
    )
} 

export default BannerFoto;
