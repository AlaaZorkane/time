/* Libraries */
import React, { Component } from 'react';

/* Components */
/* CSS & Assets */
/* JS */
/* Dynamic footer */
class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p className="cp">
                    Copyright <span aria-label="Alaeeee" className="alaa" onClick={ () => window.open("https://www.linkedin.com/in/AlaaZorkane")}>Alaa Zorkane</span> © 2018 <br />
                    Protected under <span className="license" onClick= { () => window.open("https://spdx.org/licenses/ECL-2.0.html")}>ECL-2.0</span> <br/>
                    <span className="emsi" onClick= { () => window.open("http://www.emsi.ma")}>EMSI orangers</span>
                </p>
            </div >
        );
    }
}

/* Exports */
export default Footer;
