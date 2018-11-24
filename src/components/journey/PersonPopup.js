/* Libraries */
import React from 'react'
/* Components */
/* CSS & Assets */
import '../../css/components/journey/PersonPopup.css'

/* JS */
/* Class Description */
const PersonPopup = ({name, desc, info}) => {
    return (
        <div className="person-wrapper">
            <h1>{name}</h1>
            <p className="separator">
            <span>Scientia potentia est</span>
            </p>
            <div className="description-wrapper">
                <p>{desc}</p><br/>
                <a href={"https://en.wikipedia.org/wiki/" + info} target="_blank" rel="noopener noreferrer" className="more">Learn more</a>
            </div>
        </div>
    )
}
/* Exports */
export default PersonPopup