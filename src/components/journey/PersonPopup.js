/* Libraries */
import React, { Fragment } from 'react'
/* Components */
/* CSS & Assets */
/* JS */
/* Class Description */
const PersonPopup = ({name, desc}) => {
    return (
        <Fragment>
            <h1>name : {name}</h1>
            <p>desc : {desc} </p>
        </Fragment>
    )
}
/* Exports */
export default PersonPopup