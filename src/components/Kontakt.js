import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';


function Kontakt(){
    const [copySucc, setCopySucc] = useState(false)
    const CopyToClipboard = ()=>{
        navigator.clipboard.writeText("malchertomm@gmail.com");
        setCopySucc(true)
        setTimeout(() => {
            setCopySucc(false)
          }, "1500");
    }


    return (
        <div className="KontaktWrap">
            <div className="Kontakt">
                <h1>KONTAKT</h1>
                <div className="CopyToClipboard">
                    <Tooltip
                        className='TooltipCopy'
                        title={copySucc ? `Zkopírováno ${'\u2713'}` : "Kliknutím zkopírujte."}
                        slotProps={{
                            popper: {
                            modifiers: [
                                {
                                name: 'offset',
                                options: {
                                    offset: [0, -67],
                                },
                                },
                            ],
                            },
                        }}
                        >
                        <p onClick={CopyToClipboard} >
                            malchertomm@gmail.com </p>
                            <ContentCopyIcon className='CopyIcon' fontSize="md"/>
                            
                    </Tooltip>
                </div>
                <p>Brno</p>               
                <p className="downloadCV"><a href="./download\CV_Tomas_Malcher.pdf" target="_blank" rel="noopener noreferrer">Stáhnout CV</a></p>
                <p className="Copyright">@ Tomáš Malcher 2024</p>
                <div className="EmptySpace"></div>
            </div>
        </div>
    )
} 

export default Kontakt;


