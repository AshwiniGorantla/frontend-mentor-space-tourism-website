import { useState } from "react";
import DestinationDetails from '../components/DestinationDetails'
import data from '../data/data.json'

function Destination () {
    const [index, setIndex] = useState(0);
    const DestinationList = ['MOON', 'MARS', 'EUROPA', 'TITAN']

    return (
        <div className="destination">
            <div className="title"> 01 Pick your destination</div>
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