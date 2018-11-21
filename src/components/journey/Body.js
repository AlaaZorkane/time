/* Libraries */
import React from 'react'
import Popup from 'reactjs-popup'
import {Howl} from 'howler'


/* Components */
import PersonPopup from './PersonPopup'

/* CSS & Assets */
import '../../css/components/journey/Body.css'
import popup from '../../assets/sounds/popup.wav'

/* JS */
const soundEffects = [
    new Howl({ // [1]
        src: popup,
        volume: 0.1,
        rate : 0.7
    }),
    new Howl({ // [2]
        src: popup,
        volume: 0.1,
        rate : 0.4
    })
]

/* Body calls from noSQL json server 
  and parses it into to the DOM
*/

const Body = ({event}) => {
    const { title, year, era, ytbID, place, f1, f2, p1 } = event
    /* 
    p1 [
        0 : name
        1 : picture
        2 : desc
    ]   
    */
    return (
        <div className="Body grid">
            <div className="title span-col-3">
                <h1>{title}</h1>
            </div>
            <li>
                <ul className="era"><span>Era</span><br/>{era}</ul>
                <ul><span>Year</span><br/>{year}</ul>
                <ul><span>Place</span><br/>{place}</ul>
            </li>
            <div className="video-wrapper">
                <iframe title={title} src={"https://www.youtube.com/embed/"+ytbID+"?autoplay=0&controls=0"} frameBorder="0" gesture="media" allow="encrypted-media"></iframe>
            </div>
            <div className="keyPeople">
                <h2>Key People</h2>
                <div className="pictures-wrapper">
                <Popup
                    trigger={ <img src={p1[1]} alt={p1[0]}/> }
                    onOpen={ () => {soundEffects[0].play()} }
                    onClose= { () => soundEffects[1].play() }
                    modal> 
                    {close => (
                        <div className="MainPopup">
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <PersonPopup name={p1[0]} desc={p1[2]}/>
                        </div>
                    )}
                </Popup>
                <Popup
                    trigger={ <img src={p1[1]} alt={p1[0]}/> }
                    onOpen={ () => {soundEffects[0].play()} }
                    onClose= { () => soundEffects[1].play() }
                    modal> 
                    {close => (
                        <div className="MainPopup">
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <PersonPopup name={p1[0]} desc={p1[2]}/>
                        </div>
                    )}
                </Popup>
                </div>
                <p className="tip">Click on a picture<br/>to learn more</p>
            </div>
            <div className="fact-container span-col-3">
                <div className="card">
                    <h2>Fact 1</h2>
                    <p>{f1}</p>
                </div>
                <div className="card">
                    <h2>Fact 2</h2>
                    <p>{f2}</p>
                </div>
            </div>
        </div>
    )
}


export default Body
