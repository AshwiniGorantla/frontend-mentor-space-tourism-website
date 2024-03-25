import { useState } from "react";
import CrewDetails from '../components/CrewDetails';
import data from '../data/data.json';

function Crew () {
    const [index, setIndex] = useState(0);

    const changeSelection = (event,index) => {
        event.target.parentNode.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
        event.target.setAttribute("aria-selected", true);
        setIndex(index);
    }

    return (
        <div className="crew">
            <div className="title"> 02 Meet your crew </div>
            <div className="crew-selector">
                <span className="dots" aria-selected="true" onClick={(event)=>{changeSelection(event,0)}} />
                <span className="dots" aria-selected="false" onClick={(event)=>{changeSelection(event,1)}} />
                <span className="dots" aria-selected="false" onClick={(event)=>{changeSelection(event,2)}} />
                <span className="dots" aria-selected="false" onClick={(event)=>{changeSelection(event,3)}} />
            </div>
            <CrewDetails index={index} data={data.crew} />
        </div>
    );
}

export default Crew;