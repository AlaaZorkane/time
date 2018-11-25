import React from 'react'

import '../../css/general/Final.css'


const Final = () => {
    return (
        <div className="final-wrapper">
            <h1>Thank you!</h1>
            <h4>Here's a video that wraps all of this Journey</h4>
            <div className="video-wrapper">
                <iframe title="Historyofeverything" src="https://www.youtube.com/embed/xuCn8ux2gbs?controls=0" frameBorder="0" gesture="media" allow="encrypted-media"></iframe>
            </div>
        </div>
    )
}

export default Final