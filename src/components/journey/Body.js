/* Libraries */
import React from 'react'

/* Components */

/* CSS & Assets */
import '../../css/components/journey/Body.css'

/* JS */

/* Body calls from noSQL json server 
  and parses it into to the DOM
*/

const Body = ({event}) => {
    const { title, year, era, ytbID } = event
    return (
        <div className="Body">
            <h1 className="title">title: { title }</h1>
            <h2 className="year">year: { year }</h2>
            <h3 className="era">era: { era }</h3>
            <iframe title={title} src={"https://www.youtube.com/embed/"+ytbID+"?autoplay=0&controls=0"}></iframe>
        </div>
    )
}


export default Body
