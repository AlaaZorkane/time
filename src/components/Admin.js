import React, { Component } from 'react';
import '../css/Admin.css'
import { connect } from 'react-redux'
import { createEvent } from '../store/actions/createEvent'



 class Admin extends Component {
     constructor(props) {
        super()
        this.state = {
            id: Number,
            title: "",
            history: "",
            era: "",
            year: "",
            ytbID: "",
            place: "",
            f1: "",
            f2: "",
            p1_name: "",
            p1_pic: "",
            p1_desc: "",
            p1_inf: "",
            p2_name: "",
            p2_pic: "",
            p2_desc: "",
            p2_inf: ""
        }
     }
     handleUserInput (e) {
        const value = e.target.value;
        const id = e.target.id;
        this.setState({[id]: value})
    }
    handleUserAction (e) {
        e.preventDefault();
        // console.log(this.state)
        this.props.createEvent(this.state)
    }
     render() {
        return (
            <div className="admin-wrapper">
                <form onSubmit={(event) => this.handleUserAction(event)}>
                    <div className="info">
                        <input id="id" type="number" placeholder="id" required onChange={(event) => this.handleUserInput(event)}/>
                        <input id="title" type="text" placeholder="title" required onChange={(event) => this.handleUserInput(event)}/>
                        <input id="history" type="text" placeholder="history" required onChange={(event) => this.handleUserInput(event)}/>
                        <input id="era" type="text" placeholder="era" required onChange={(event) => this.handleUserInput(event)}/>
                        <input id="year" type="text" placeholder="year" required onChange={(event) => this.handleUserInput(event)}/>
                        <input id="ytbID" type="text" placeholder="ytbID" required onChange={(event) => this.handleUserInput(event)}/>
                        <input id="place" type="text" placeholder="place" required onChange={(event) => this.handleUserInput(event)}/>
                            <div className="facts">
                                <textarea id="f1" type="text" placeholder="fact 1" required onChange={(event) => this.handleUserInput(event)}></textarea>
                                <textarea id="f2" type="text" placeholder="fact 2" required onChange={(event) => this.handleUserInput(event)}></textarea>
                            </div>
                    </div>
                    <div className="people">
                        <div className="p1">
                            <input id="p1_name" type="text" placeholder="p1_name" required onChange={(event) => this.handleUserInput(event)}/>
                            <input id="p1_pic" type="text" placeholder="p1_picURL" required onChange={(event) => this.handleUserInput(event)}/>
                            <input id="p1_inf" type="text" placeholder="p1_wikilink" required onChange={(event) => this.handleUserInput(event)}/>
                            <textarea id="p1_desc" type="text" placeholder="p1_desc" required onChange={(event) => this.handleUserInput(event)}></textarea>
                        </div>
                        <div className="p2">
                            <input id="p2_name" type="text" placeholder="p2_name" required onChange={(event) => this.handleUserInput(event)}/>
                            <input id="p2_pic" type="text" placeholder="p2_picURL" required onChange={(event) => this.handleUserInput(event)}/>
                            <input id="p2_inf" type="text" placeholder="p2_wikilink" required onChange={(event) => this.handleUserInput(event)}/>
                            <textarea id="p2_desc" type="text" placeholder="p2_desc" required onChange={(event) => this.handleUserInput(event)}></textarea>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
     }
 }

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}


export default connect(null, mapDispatchToProps)(Admin)