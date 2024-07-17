import { useEffect, useState } from "react";
import Galerie from "./Galerie";
import list from './listKytary.json'


function PortKytary(){
    const [portfolioPage, setPortfolioPage] = useState('Burl')
    const [ImageList, setImageList] = useState(list)

    useEffect(() => {
        if (portfolioPage==="L-17"){
            setImageList({"L-17": list["L-17"]})
        }else if(portfolioPage==="Viking"){
            setImageList({"Viking": list["Viking"]})
        }else if(portfolioPage==="Burl"){
            setImageList({"Burl": list["Burl"]})
        }else if(portfolioPage==="Purple7"){
            setImageList({"Purple7": list["Purple7"]})
        }else{
            setImageList(list)
        }
    },[portfolioPage])

    
    return (
        <>
            <div className="PortGrafika">
                <p className={`PortSubSelect ${portfolioPage === 'L-17' ? 'active' : ''}`} onClick={() => setPortfolioPage("L-17")}>L-17</p>
                <p className={`PortSubSelect ${portfolioPage === 'Viking' ? 'active' : ''}`} onClick={() => setPortfolioPage("Viking")}>Viking</p>
                <p className={`PortSubSelect ${portfolioPage === 'Burl' ? 'active' : ''}`} onClick={() => setPortfolioPage("Burl")}>Burl Floyd</p>
                <p className={`PortSubSelect ${portfolioPage === 'Purple7' ? 'active' : ''}`} onClick={() => setPortfolioPage("Purple7")}>Purple7</p>
                <p className={`PortSubSelect ${portfolioPage === 'Vse' ? 'active' : ''}`} onClick={() => setPortfolioPage("Vse")}>Vše</p>
            </div>
            <div>
                <Galerie listObr={ImageList} />
            </div>
        
        </>
    )
} 

export default PortKytary;