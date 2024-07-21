import Galerie from "./Galerie";
import list from './listMe.json'


function AboutMe(){
    return (
        <div className="AboutMe">
            <Galerie listObr={list} />
        </div>
        
    )
} 

export default AboutMe;
