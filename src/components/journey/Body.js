/* Libraries */
import React from 'react'
import Popup from 'reactjs-popup'
import {Howl} from 'howler'

/* Components */
import PersonPopup from './PersonPopup'

/* CSS & Assets */
import '../../css/components/journey/Body.css'
import popup from '../../assets/sounds/popup.wav'
import infinityloading from '../../assets/infinityloading.svg'

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
/* component */
const Body = ({event}) => {
    const { title, year, era, ytbID, place, f1, f2, p1_name, p1_pic, p1_desc, p1_inf, p2_name, p2_pic, p2_desc, p2_inf, history } = event
    /* 
    p1 [
        0 : name
        1 : picture
        2 : desc
    ]   
    */
    return (
        <div className="Body">

            <div className="grid1">
                {/* TITLE BLOCK */}
                <div className="title span-col-3">
                    <h1>{title}</h1>
                    <h2>{history}</h2>
                </div>
                <div className="grid2">
                    {/* INFOS BLOCK */}
                    <div>
                        <li>
                            <ul className="era"><span>Era</span><br/>{era}</ul>
                            <ul><span>Year</span><br/>{year}</ul>
                            <ul><span>Place</span><br/>{place}</ul>
                        </li>
                    </div>
                    {/* VIDEO BLOCK */}
                    <div className="video-wrapper">
                        <iframe title={title} src={"https://www.youtube.com/embed/"+ytbID+"?autoplay=0&controls=0"} frameBorder="0" gesture="media" allow="encrypted-media"></iframe>
                    </div>
                    {/* PEOPLE BLOCK */}
                    <div className="keyPeople gridalt">
                        {/* P_TITLE BLOCK */}
                        <div className="span-col-2">
                            <h2>Notably</h2>
                        </div>
                        {/* P_PICTURES BLOCK */}
                        <Popup
                            trigger={   <div className="picture-wrapper">
                                        <img src={p1_pic} alt={p1_name}/>
                                        </div> }
                            onOpen={ () => {soundEffects[0].play()} }
                            onClose= { () => soundEffects[1].play() }
                            modal> 
                            {close => (
                                <div className="MainPopup">
                                    <a className="close" onClick={close}>
                                        &times;
                                    </a>
                                    <PersonPopup info={p1_inf} name={p1_name} desc={p1_desc}/>
                                </div>
                            )}
                        </Popup>
                        <Popup
                            trigger={   <div className="picture-wrapper">
                                            <img src={p2_pic} alt={p2_name}/>
                                        </div> }
                            onOpen={ () => {soundEffects[0].play()} }
                            onClose= { () => soundEffects[1].play() }
                            modal> 
                            {close => (
                                <div className="MainPopup">
                                    <a className="close" onClick={close}>
                                        &times;
                                    </a>
                                    <PersonPopup info={p2_inf} name={p2_name} desc={p2_desc}/>
                                </div>
                            )}
                        </Popup>
                        {/* P_TIP BLOCK */}
                        <div className="span-col-2">
                            <p className="tip">
                                Click on a picture<br/>to learn more
                            </p>
                        </div>
                    </div>
                </div>
                {/* FACTS BLOCK */}
                <div className="grid3 span-col-3">
                    {/* FACT CARD N1 BLOCK */}
                    <div className="card g1">
                        <h2>Fact 1</h2>
                        <p>{f1}</p> 
                    </div>
                    {/* FACT CARD N2 BLOCK */}
                    <div className="card g2">
                        <h2>Fact 2</h2>
                        <p>{f2}</p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body