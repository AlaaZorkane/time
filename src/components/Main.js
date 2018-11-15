/* Libraries */
import React, { Component } from 'react'
import {Howl} from 'howler'
import Popup from 'reactjs-popup'

/* Components */
import MainPopup from './MainPopup'

/* CSS & Assets */
import '../css/components/Landing.css'
import logo from '../assets/logo.png'
import hover from '../assets/sounds/hover.wav'
// import popupOpen from '../assets/sounds/popupOpen.wav'
import popupClose from '../assets/sounds/popupClose.wav'


/* JS */

/* Landing page initiliazing the app "BEGIN JOURNEY" 
   Password checking added only for presentation
   to disable password change isPassword to false 
*/
class Main extends Component {
    constructor(props) {
        super()
        this.props = {
            password : "",
            isPassword : Boolean
        }
        this.state = {
            confirmPassword : "emsi"
        }
    }
    render() {
        /* const hov = new Howl({
            src: hover,
            volume: 0.5
        })
        const popOpen = new Howl({
            src: popupOpen,
            volume: 0.5
        })
        const popClose = new Howl({
            src: popupClose,
            volume: 0.5
        }) */

        const soundEffects = [
            new Howl({ // [0]
                src: hover,
                volume: 0.5
            }),
            new Howl({ // [1]
                src: popupClose,
                volume: 0.5,
                rate : 0.7
            }),
            new Howl({ // [2]
                src: popupClose,
                volume: 0.5,
                rate : 0.4
            })
        ]
        return (
            <div className="Main">
                <div className="logo_Container" >
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <Popup
                    trigger={<button onMouseEnter={ () => soundEffects[0].play()} className="button_Container">
                                LOGIN
                            </button>}
                    onOpen={ () => {soundEffects[1].play(); soundEffects[0].stop()} }
                    onClose= { () => soundEffects[2].play() }
                    modal> 
                    <MainPopup />
                </Popup>
            </div>
        )
    }
}


/* exports */
export default Main