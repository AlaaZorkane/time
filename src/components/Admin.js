import React, { Component } from 'react';
import '../css/Admin.css'



 class Admin extends Component {
     constructor(props) {
        super()
        this.state = {
            id: Number,
            title: "",
            era: "",
            year: "",
            ytbID: "",
            place: "",
            f1: "",
            f2: "",
            p1_name: "",
            p1_pic: "",
            p1_desc: "",
            p2_name: "",
            p2_pic: "",
            p2_desc: ""
        }
     }
     handleUserInput (e) {
        const value = e.target.value;
        const id = e.target.id;
        this.setState({[id]: value})
    }
    handleUserAction (e) {
        e.preventDefault();
        console.log(this.state)
    }
     render() {
        return (
            <div className="admin-wrapper">
                <form onSubmit={(event) => this.handleUserAction(event)}>
                    <div className="info">
                        <input id="id" type="text" placeholder="id" onChange={(event) => this.handleUserInput(event)}/>
                        <input id="title" type="text" placeholder="title" onChange={(event) => this.handleUserInput(event)}/>
                        <input id="era" type="text" placeholder="era" onChange={(event) => this.handleUserInput(event)}/>
                        <input id="year" type="text" placeholder="year" onChange={(event) => this.handleUserInput(event)}/>
                        <input id="ytbID" type="text" placeholder="ytbID" onChange={(event) => this.handleUserInput(event)}/>
                        <input id="place" type="text" placeholder="place" onChange={(event) => this.handleUserInput(event)}/>
                            <div className="facts">
                                <textarea id="f1" type="text" placeholder="fact 1" onChange={(event) => this.handleUserInput(event)}></textarea>
                                <textarea id="f2" type="text" placeholder="fact 2" onChange={(event) => this.handleUserInput(event)}></textarea>
                            </div>
                    </div>
                    <div className="people">
                        <div className="p1">
                            <input id="p1_name" type="text" placeholder="p1_name" onChange={(event) => this.handleUserInput(event)}/>
                            <input id="p1_pic" type="text" placeholder="p1_picURL" onChange={(event) => this.handleUserInput(event)}/>
                            <textarea id="p1_desc" type="text" placeholder="p1_desc" onChange={(event) => this.handleUserInput(event)}></textarea>
                        </div>
                        <div className="p2">
                            <input id="p2_name" type="text" placeholder="p2_name" onChange={(event) => this.handleUserInput(event)}/>
                            <input id="p2_pic" type="text" placeholder="p2_picURL" onChange={(event) => this.handleUserInput(event)}/>
                            <textarea id="p2_desc" type="text" placeholder="p2_desc" onChange={(event) => this.handleUserInput(event)}></textarea>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
     }
 }


export default Admin