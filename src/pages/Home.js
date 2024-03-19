import { useEffect } from "react";
import backgroundimage from '../images/home/background-home-desktop.jpg'

function Home () {
    useEffect(()=>{
        let mainDiv = document.getElementsByClassName('main')[0];
        mainDiv.style.backgroundImage = `url(${backgroundimage})`;
    }, [])
    return (
    <div className="home">
        <div className="home-grid">
            <div className="home-text">
                <p style={{fontSize:"40px", fontWeight:"100", textTransform: "uppercase"}}>So, you want to travle to </p>
                <p style={{fontSize:"155px", fontWeight:"400"}}> SPACE </p>
                <p style={{fontSize:"20px", fontWeight:"100"}}> Let’s face it; if you want to go to space, you might as well genuinely 
                    go to outer space and not hover kind of on the edge of it. Well sit back, and relax because 
                    we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="explore">
                <spam style={{position:"relative", top:"40%", fontSize:"32px", fontWeight:"400"}}>EXPLORE</spam>
            </div>
        </div>
        
    </div>);
}

export default Home;