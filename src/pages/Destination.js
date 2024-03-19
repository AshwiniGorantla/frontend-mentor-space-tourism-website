import { useEffect, useState } from "react";
import backgroundimage from '../images/destination/background-destination-desktop.jpg'
import DestinationDetails from '../components/DestinationDetails'
import data from '../data/data.json'

function Destination () {
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        let mainDiv = document.getElementsByClassName('main')[0];
        mainDiv.style.backgroundImage = `url(${backgroundimage})`;
    }, [])

    const DestinationList = ['MOON', 'MARS', 'EUROPA', 'TITAN']

    return (
        <div className="destination">
            <div className="destination-title"> 01 PICK YOUR DESTINATION </div>
            <div className="planets-list">
                {DestinationList.map((dest, index) => (
                <span className="planet" key={index} onClick={()=>{setIndex(index);}}> 
                    {dest} 
                </span>))}
            </div>
            <DestinationDetails index={index} data={data.destinations} />
        </div>
    );
}

export default Destination;