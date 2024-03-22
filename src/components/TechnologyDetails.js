
import { useReducer, useEffect, useState } from 'react';

function TechnologyDetails ({ index, data}) {

    const initialState = {
        name:"",
        description:"",
        imageUrl:""
    };

    const [techDetails, updateDetails] = useReducer((state, updates) => ({ ...state, ...updates }),initialState);
    
    useEffect(()=> {
        updateDetails({ 
            name: data[index].name, 
            description: data[index].description,
            imageUrl: data[index].images.png
        })

    },[index])

    const imagesList = [
        require('../images/technology/image-launch-vehicle-portrait.jpg'),
        require('../images/technology/image-spaceport-portrait.jpg'),
        require('../images/technology/image-space-capsule-portrait.jpg')
    ];

    return(
        <div className="content">
            <div style={{paddingTop:"10%"}} className="tech-content-text">
                <p style={{fontSize:"24px", fontWeight:"100", textTransform: "uppercase"}}>
                    the terminology
                </p>
                <p style={{fontSize:"50px", fontWeight:"400", textTransform: "uppercase", marginTop:"15px", marginBottom:"20px"}}>
                    {techDetails.name}
                </p>
                <p style={{fontSize:"20px", fontWeight:"100"}}>
                    {techDetails.description}
                </p>
            </div>
            <img className='tech-img' src={imagesList[index]} alt="technology"/>
        </div>
    ) 
}


export default TechnologyDetails;