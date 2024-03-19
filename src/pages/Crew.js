import { useEffect } from "react";
import backgroundImage from '../images/crew/background-crew-desktop.jpg'

function Crew () {
    useEffect(()=>{
        let mainDiv = document.getElementsByClassName('main')[0];
        mainDiv.style.backgroundImage = `url(${backgroundImage})`;
    }, [])
    return (
    <div className="crew">
       Crew page
    </div>);
}

export default Crew;