/* Libraries */
import React, { Component } from 'react'
import Popup from 'reactjs-popup'


/* Components */
/* CSS & Assets */
import "../../css/components/ui/About.css"
import question from "../../assets/ui/question.svg"

/* JS */
const Tooltip = ({ title, content }) => (
    <div className="tooltip">
      <div className="header">{title}</div>
      <div className="content">
        {content}
      </div>
    </div>
  )
/* About question mark + popup */

class About extends Component {
    render() {
        return (
            <div className="About">
                <Popup
                trigger={<div className="question_Container">
                            <img src={question} alt="about" className="question"/>
                        </div>}
                position="left bottom"
                on="hover"
                >
                <Tooltip title="About" content="Testing some stuff"/>
                </Popup>
            </div>
        );
    }
}

export default About;


/* Exports */