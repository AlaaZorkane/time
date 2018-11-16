/* Libraries */
import React, { Component } from 'react';
import {Howl} from 'howler'

/* Components */
/* CSS & Assets */
import "../../css/components/ui/MusicControl.css"
import speakerON from "../../assets/ui/speakerON.svg"
import speakerOFF from "../../assets/ui/speakerOFF.svg"
import intro from '../../assets/intro.ogg'

/* JS */
let i = 0;
const int = new Howl({
    src: intro,
    volume: 0.5,
    loop: true
})
/* Music control for better user experience,
    Inits with music muted, on click music plays
*/

class MusicControl extends Component {
    constructor(props) {
        super();
        this.state = {
            playing : false
        }
    }
    render() {
        const { playing } = this.state;
        function play() {
            if ( i === 0 ) {
                int.play()
            }
            int.mute(false)
            i++;
            console.log(i)
        }
        function mute() {
            int.mute(true)
        }
        if ( playing ) {
            return (
                <div className="MusicControl" onClick={ () => { this.setState({ playing : false }); mute() } }>
                   <img src={speakerON} alt="ON" className="speaker"/>
                </div> 
            );
        }
        return (
            <div className="MusicControl" onClick={ () => { this.setState({ playing : true }); play() } }>
                <img src={speakerOFF} alt="OFF" className="speaker"/>
            </div>
        );
    }
}

/* Exports */
export default MusicControl;
