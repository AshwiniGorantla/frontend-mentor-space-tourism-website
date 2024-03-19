import { useEffect, useReducer } from "react";

function DestinationDetails ({index, data}) {
    const initialState = {
        name:"",
        description:"",
        distance:"",
        travel:"",
        imageUrl:""
    };
    const [planetDetails, updateDetails] = useReducer((state, updates) => ({ ...state, ...updates }),initialState);
    
    useEffect(()=> {
        updateDetails({ 
            name: data[index].name, 
            description: data[index].description,
            distance: data[index].distance,
            travel: data[index].travel,
            imageUrl: data[index].images.png
        })

    },[index])

    return(
        <div className="planet-details">
            <img className="planet-img" src={require('../images/destination/image-moon.png')} alt="planet"/>
            {/* <img src={require(`${planetDetails.imageUrl.toString()}`)} alt="card" /> */}
            <div className="planet-overview">
                <p style={{fontSize:"90px"}}>
                    {planetDetails.name}
                </p>
                <p>
                    {planetDetails.description}
                </p>
                <div className="overview-line"></div>
                <div className="overview-footer">
                    <div>
                        <p>AVG. DISTANCE</p>
                        <p style={{fontSize:"30px"}}>{planetDetails.distance}</p>
                    </div>
                    <div>
                        <p>EST. TRAVEL TIME</p>
                        <p style={{fontSize:"30px"}}>{planetDetails.travel}</p>
                    </div>
                </div>
                
            </div>
        </div>
    ) 
}


export default DestinationDetails;