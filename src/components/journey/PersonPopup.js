/* Libraries */
import React from 'react'
/* Components */
/* CSS & Assets */
/* JS */
/* Class Description */
const PersonPopup = ({name, desc}) => {
    return (
        <div className="person-wrapper">
            <h1>name : {name}</h1>
            <div className="description-wrapper">
                <p>desc : {desc} </p>
            </div>   
        </div>
    )
}
/* Exports */
export default PersonPopup