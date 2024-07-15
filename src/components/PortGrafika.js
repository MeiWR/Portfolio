import { useEffect, useState } from "react";
import Galerie from "./Galerie";
import list from './list.json'

function PortGrafika(){
    const [portfolioPage, setPortfolioPage] = useState('Vse')
    const [ImageList, setImageList] = useState(list)

    useEffect(() => {
        if (portfolioPage==="Demigod"){
            setImageList({"Demigod": list["Demigod"]})
        }else if(portfolioPage==="CWO"){
            setImageList({"CWO": list["CWO"]})
        }else if(portfolioPage==="Ostatni"){
            setImageList({"Ostatni": list["Ostatni"]})
        }else{
            setImageList(list)
        }
    },[portfolioPage])



    return ( 
        <>
        
            <div className="PortGrafika">
                <p className={`PortSubSelect ${portfolioPage === 'Demigod' ? 'active' : ''}`} onClick={() => setPortfolioPage("Demigod")}>Demigod</p>
                <p className={`PortSubSelect ${portfolioPage === 'CWO' ? 'active' : ''}`} onClick={() => setPortfolioPage("CWO")}>CWO</p>
                <p className={`PortSubSelect ${portfolioPage === 'Ostatni' ? 'active' : ''}`} onClick={() => setPortfolioPage("Ostatni")}>Ostatní</p>
                <p className={`PortSubSelect ${portfolioPage === 'Vse' ? 'active' : ''}`} onClick={() => setPortfolioPage("Vse")}>Vše</p>
            </div>
            <div>
                <Galerie listObr={ImageList} />
            </div>
        
        </>
    )
} 

export default PortGrafika;