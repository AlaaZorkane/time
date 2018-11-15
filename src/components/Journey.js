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
      era : [
        { 
          "id" : 
        }
      ],
      canForward : Boolean,
      canBackward : Boolean
    }
  }

  async componentDidmount() {
    const { era } = this.state
    const data = await fetch( `http://localhost:3004/${era[0].id}` )
    this.setState({ era : data })
    console.log(data)
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
