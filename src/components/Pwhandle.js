/* Libraries */
import React, { Component } from 'react';

/* Components */

/* CSS & Assets */
import '../css/components/Pwhandle.css'

/* JS */

/* Class Description */
class Pwhandle extends Component {
    constructor(props) {
        super()
        this.state = {
            password: "",
            confirmPassword: "emsi"
        }
    }
    
    handleUserInput (e) {
        const value = e.target.value;
        this.setState({password: value});
        console.log(value)
    }
    render() {
        return (
            <div className="password_Container">
                <input type="password" placeholder="Password :) ?" className="password" name="password" onChange={(event) => this.handleUserInput(event)}/>
            </div>
         )
    }
}

/* exports */
export default Pwhandle;




