import { useEffect, useState } from "react";
import Galerie from "./Galerie";
import list from './listGrafika.json'

function PortGrafika(){
    const [portfolioPage, setPortfolioPage] = useState('Vse')
    const [ImageList, setImageList] = useState(list)

    useEffect(() => {
        if (portfolioPage==="Demigod"){
            setImageList({"Demigod": list["Demigod"]})
        }else if(portfolioPage==="CWO"){
            setImageList({"CWO": list["CWO"]})
        }else if(portfolioPage==="Domax"){
            setImageList({"Domax": list["Domax"]})
        }else{
            setImageList(list)
        }
    },[portfolioPage])



    return ( 
        <>
        
            <div className="PortGrafika">
                <p className={`PortSubSelect ${portfolioPage === 'Demigod' ? 'active' : ''}`} onClick={() => setPortfolioPage("Demigod")}>Demigod</p>
                <p className={`PortSubSelect ${portfolioPage === 'CWO' ? 'active' : ''}`} onClick={() => setPortfolioPage("CWO")}>CWO</p>
                <p className={`PortSubSelect ${portfolioPage === 'Domax' ? 'active' : ''}`} onClick={() => setPortfolioPage("Domax")}>Domax!</p>
                <p className={`PortSubSelect ${portfolioPage === 'Vse' ? 'active' : ''}`} onClick={() => setPortfolioPage("Vse")}>Vše</p>
            </div>
            <div>
                <Galerie listObr={ImageList} />
            </div>
        
        </>
    )
} 

export default PortGrafika;