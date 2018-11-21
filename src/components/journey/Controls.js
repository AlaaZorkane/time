/* Libraries */
import React, { Component } from 'react'

/* Components */


/* CSS & Assets */
import '../../css/components/journey/Controls.css'

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
          <h1 className="forward">forward</h1>
          <h1 className="backward">backward</h1>
        </div>
    )
  }
}

export default Journey
