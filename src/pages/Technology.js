import { useState } from "react";
import TechnologyDetails from '../components/TechnologyDetails';
import data from '../data/data.json';

function Technology () {
    const [index, setIndex] = useState(0);

    return (
        <div className="technology">
            <div className="title"> 03 space launch 101 </div>
            <div className="technology-selector">
                <div className="numberCircle" onClick={()=> {setIndex(0)}}>1</div>
                <div className="numberCircle" onClick={()=> {setIndex(1)}}>2</div>
                <div className="numberCircle" onClick={()=> {setIndex(2)}}>3</div>
            </div>
            <TechnologyDetails index={index} data={data.technology} />
        </div>
    );
}

export default Technology;