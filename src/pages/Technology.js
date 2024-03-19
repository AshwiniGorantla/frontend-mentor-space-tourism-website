import { useEffect } from "react";
import backgroundimage from '../images/technology/background-technology-desktop.jpg'

function Technology () {
    useEffect(()=>{
        let mainDiv = document.getElementsByClassName('main')[0];
        mainDiv.style.backgroundImage = `url(${backgroundimage})`;
    }, [])
    return (
    <div>
        Technology page
    </div>);
}

export default Technology;