/* Libraries */
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

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
        password: "",
        user_type: "",
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
    if (this.props.firstTime) {
    return (
        <Fragment>
        <form netlify onSubmit={(event) => this.handleUserAction(event)} className="LoginForm">
            <div className="input_field">
                <input placeholder="Enter your name" required type="text" id="name" onChange={(event) => this.handleUserInput(event)}/>
            </div>
            <div className="input_field">
                <input placeholder="Enter your Email" required type="email" id="email" onChange={(event) => this.handleUserInput(event)}/>
            </div>
            <div className="input_field">
                <input placeholder="Enter a Password" required type="password" id="password" onChange={(event) => this.handleUserInput(event)}/>
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
            </div>
            <div className="btn_container">
                <Link to="/journey/1">
                    <button className="btn">Launch</button>
                </Link>
            </div>
        </form>
        </Fragment>
    )
    } else {
        return (
            <Fragment>
            <form netlify onSubmit={(event) => this.handleUserAction(event)} className="LoginForm">
                <div className="input_field">
                    <input placeholder="Enter your Email" required type="email" id="email" onChange={(event) => this.handleUserInput(event)}/>
                </div>
                <div className="input_field">
                    <input placeholder="Enter your Password" required type="password" id="password" onChange={(event) => this.handleUserInput(event)}/>
                </div>
                <div className="btn_container">
                    <Link to="/journey/1">
                        <button className="btn">Continue</button>
                    </Link>
                </div>
            </form>
            </Fragment>
        )
    }
}
}

/* Exports */
export default LoginForm