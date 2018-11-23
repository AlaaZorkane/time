/* Libraries */
import React, { Component } from 'react'

/* Components */


/* CSS & Assets */
import '../../css/components/journey/Controls.css'
import arrow from '../../assets/ui/arrow.svg'


/* JS */

/* Journey calls from noSQL json server 
  and parses it into to the DOM
*/

class Journey extends Component {
  constructor(props) {
    super()
    this.state = {
        canForward: Boolean,
        canBackward: Boolean
    }
  }
  render() {
    return (
        <div className="Controls">
          <div className="right-wrapper">
            <img src={arrow} alt="forward" className="right-control"/>
          </div>
          <div className="left-wrapper">
            <img src={arrow} alt="backward" className="left-control"/>
          </div>
        </div>
    )
  }
}

export default Journey
