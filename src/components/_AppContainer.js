/* Libraries */
import React, { Component } from 'react';
import {Howl} from 'howler';

/* Components */
import Landing from './Landing';

/* CSS & Assets */
import '../css/components/AppContainer.css';
import intro from '../assets/intro.ogg';

/* JS */
const init = new Howl({
    src: intro,
    volume: 1,
    loop: true,
});
init.play();
/* Class Description */
class AppContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            isPassword: true,
            password: ""
        }
    }
    handleUserInput (e) {
        const value = e.target.value;
        this.setState({password: value});
        console.log(value)
    }
    
    render() {
        const { password, isPassword } = this.state;
        if ( isPassword === true ) {
            return (
                <div className="appContainer">
                    <input type="password" placeholder="Password :) ?" className="password" name="password" onChange={(event) => this.handleUserInput(event)}/>
                    <Landing password={this.state.password}/>
                </div>
            )
        } else {
            return (
                <div className="appContainer">
                    <Landing password={password} isPassword={this.state.isPassword}/>
                </div>
            )
        }
    }
}

/* Exports */
export default AppContainer 



