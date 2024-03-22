import { useEffect, useReducer } from "react";

function DestinationDetails ({index, data}) {
    const imagesList = [
        require('../images/destination/image-moon.png'),
        require('../images/destination/image-mars.png'),
        require('../images/destination/image-europa.png'),
        require('../images/destination/image-titan.png')
    ];

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
        <div className="content">
            <img className="planet-img" src={imagesList[index]} alt="planet"/>
            {/* <img src={require(`${planetDetails.imageUrl}`)} alt="planet-image" /> */}
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