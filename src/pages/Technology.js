import { useState } from "react";
import TechnologyDetails from '../components/TechnologyDetails';
import data from '../data/data.json';

function Technology () {
    const [index, setIndex] = useState(0);

    const changeSelection = (event,index) => {
        event.target.parentNode.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
        event.target.setAttribute("aria-selected", true);
        setIndex(index);
    }

    return (
        <div className="technology">
            <div className="title"> 03 space launch 101 </div>
            <div className="technology-selector">
                <div className="numberCircle" aria-selected="true" onClick={(event)=>{changeSelection(event,0)}}> 1 </div>
                <div className="numberCircle" aria-selected="false" onClick={(event)=>{changeSelection(event,1)}}> 2 </div>
                <div className="numberCircle" aria-selected="false" onClick={(event)=>{changeSelection(event,2)}}> 3 </div>
            </div>
            <TechnologyDetails index={index} data={data.technology} />
        </div>
    );
}

export default Technology;