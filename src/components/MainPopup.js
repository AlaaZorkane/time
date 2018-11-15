 /* Libraries */
 import React, { Component } from 'react'

 /* Components */
 /* CSS & Assets */
 /* JS */

 /* Popup - Handles user information into the database & renders the journey into the dom */
class MainPopup extends Component {
    constructor(props) {
        super()
        this.state = {

        }
        this.props = {

        }
    }
    render() {
        const test = {
            color : 'black'
        }
        return (
            <div className="MainPopup">
                <h1 style={test}>Test</h1>
            </div>
        );
    }
}

 /* Exports */
export default MainPopup
 /* const { password, isPassword } = this.props
        const { confirmPassword } = this.state
        function canEnter() {
            if (password === "" && isPassword ) {
                err.play()
            } else {
                if ( password === confirmPassword || isPassword === false ) {
                    alert("Success!")
                    window.open("/Journey","_self")
                } else {
                    err.play()
                }
            }
        } */