import React from 'react'
import "../../css/styles.css"

export const Image = ({src}) =>{
    return(
        <li className="img" >
            <img src={src} alt="just_an_image" width = "250ox" height = "250px"></img>
        </li>
    
    )
}

export default Image;