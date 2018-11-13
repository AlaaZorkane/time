/* Libraries */
import React, { Component } from 'react'

/* Components */


/* CSS & Assets */
import '../css/components/Journey.css'

/* JS */

/* A Brief History of Time */
class Journey extends Component {
  constructor() {
    super()
    this.props = {

    }
    this.state = {
      dates : []
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
