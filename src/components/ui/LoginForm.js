 /* Libraries */
 import React, { Component, Fragment } from 'react'

 /* Components */
 /* CSS & Assets */
 import "../../css/components/ui/LoginForm.css"
 /* JS */

 /* Popup - Handles user information into the database & renders the journey into the dom */
class LoginForm extends Component {
    constructor(props) {
        super()
        this.state = {
            name:"",
            email: "",
            user_type: ""
        }
    }
    handleUserInput (e) {
        const value = e.target.value;
        const id = e.target.id;
        this.setState({[id]: value});
    }
    handleUserAction (e) {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <Fragment>
            <form onSubmit={(event) => this.handleUserAction(event)} className="LoginForm">
                <div className="input_field">
                    <input placeholder="Enter your name" required type="name" id="name" onChange={(event) => this.handleUserInput(event)}/>
                </div>
                <div className="input_field">
                    <input placeholder="Enter your Email" required type="email" id="email" onChange={(event) => this.handleUserInput(event)}/>
                </div>
                <div className="input_field">
                    <div className="prof">
                        <label htmlFor="user_type">Profession:</label>
                        <select  id="user_type" required onChange={(event) => this.handleUserInput(event)}>
                            <option value=""></option>
                            <option value="student">Student</option>
                            <option value="professor">Professor</option>
                            <option value="other">Other</option>
                        </select> 
                    </div>
                <div className="btn_container">
                    <button className="btn">Launch</button>
                </div>
                </div>
                {/*<div className="input_field">
                    <button className="btn">Begin Journey</button>
                </div>*/}
            </form>
            </Fragment>
        )
    }
}

 /* Exports */
export default LoginForm