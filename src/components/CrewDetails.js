
import { useReducer, useEffect } from 'react';

function CrewDetails ({index, data}) {

    const initialState = {
        name:"",
        role:"",
        bio:"",
        imageUrl:""
    };
    const [crewDetails, updateDetails] = useReducer((state, updates) => ({ ...state, ...updates }),initialState);
    
    useEffect(()=> {
        updateDetails({ 
            name: data[index].name, 
            role: data[index].role,
            bio: data[index].bio,
            imageUrl: data[index].images.png
        })

    },[index])

    const imagesList = [
        require('../images/crew/image-douglas-hurley.png'),
        require('../images/crew/image-mark-shuttleworth.png'),
        require('../images/crew/image-victor-glover.png'),
        require('../images/crew/image-anousheh-ansari.png'),
    ];

    return(
        <div className="content">
            <div style={{paddingTop:"10%"}} className="content-text">
                <p style={{fontSize:"40px", fontWeight:"100", textTransform: "uppercase"}}>
                    {crewDetails.role}
                </p>
                <p style={{fontSize:"50px", fontWeight:"400", textTransform: "uppercase", marginTop:"15px", marginBottom:"20px"}}>
                    {crewDetails.name}
                </p>
                <p style={{fontSize:"20px", fontWeight:"100"}}>
                    {crewDetails.bio}
                </p>
            </div>
            <img className='crew-img' src={imagesList[index]} alt="crew"/>
        </div>
    ) 
}


export default CrewDetails;