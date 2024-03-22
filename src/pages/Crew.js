import { useState } from "react";
import CrewDetails from '../components/CrewDetails';
import data from '../data/data.json';

function Crew () {
    const [index, setIndex] = useState(0);

    return (
        <div className="crew">
            <div className="title"> 02 Meet your crew </div>
            <div className="crew-selector">
                <span className="dots" onClick={()=>{setIndex(0);}} /> 
                <span className="dots" onClick={()=>{setIndex(1);}} />
                <span className="dots" onClick={()=>{setIndex(2);}} /> 
                <span className="dots" onClick={()=>{setIndex(3);}} />
            </div>
            <CrewDetails index={index} data={data.crew} />
        </div>
    );
}

export default Crew;