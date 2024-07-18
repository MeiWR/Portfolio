import { useState } from "react";
import PortGrafika from "./PortGrafika";
import PortVideo from "./PortVideo";
import PortKytary from "./PortKytary";

function Portfolio(){
    const [portfolio, setPortfolio] = useState('Grafika')
    return (
        <div className="Portfolio">
            <div className="PortfolioHeader">
                <h1 className="nadpisPortfolio">PORTFOLIO</h1>
                <h2 className="jmenoPortfolio">Tomáš Malcher</h2>
            </div>
            <div className="PortSelection">
                <p className={`PortSelect ${portfolio === 'Grafika'? 'active' : ''}`} onClick={()=>setPortfolio("Grafika")}>Design</p>
                <p className={`PortSelect ${portfolio === 'Video'? 'active' : ''}`} onClick={()=>setPortfolio("Video")}>Video</p>
                <p className={`PortSelect ${portfolio === 'Kytary'? 'active' : ''}`} onClick={()=>setPortfolio("Kytary")}>Výroba kytar</p>
            </div>
            <div className="PortRendered">
                {portfolio==="Grafika" && <PortGrafika />}
                {portfolio==="Video" && <PortVideo />}
                {portfolio==="Kytary" && <PortKytary />}
            </div>
        </div>
    )
} 

export default Portfolio;

