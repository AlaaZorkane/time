/* Libraries */
import React, { Component } from 'react'

/* Components */


/* CSS & Assets */
import '../css/components/Journey.css'

/* JS */

/* Journey calls from noSQL json server 
  and parses it into to the DOM
*/

class Journey extends Component {
  constructor(props) {
    super()
    this.state = {
      dates : [],
      canForward : Boolean,
      canBackward : Boolean
    }
  }

  async componentDidmount() {
    const dates = await ( await fetch("http://localhost:3004/dates") ).json()
    this.setState({ dates })
    console.log(dates)
  }

  render() {
    return (
        <div className="Journey_Container">
          sup
        </div>
    )
  }
}

export default Journey
