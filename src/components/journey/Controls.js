/* Libraries */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* Components */


/* CSS & Assets */
import '../../css/components/journey/Controls.css'
import arrow from '../../assets/ui/arrow.svg'


/* JS */

/* Journey calls from noSQL json server 
  and parses it into to the DOM
*/

class Controls extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    if (Number(this.props.id) > 1) {
      return (
        <div className="Controls">
          <div className="right-wrapper">
              <Link to={'/journey/' + (Number(this.props.id) + 1)} replace>
              <img src={arrow} alt="forward" className="right-control"/>
              </Link>
          </div>
          <div className="left-wrapper">
              <Link to={'/journey/' + (Number(this.props.id) - 1)} replace>
              <img src={arrow} alt="backward" className="left-control"/>
              </Link>
          </div>
        </div>
      )
    }
    return (
        <div className="Controls">
          <div className="right-wrapper">
              <Link to={'/journey/' + (Number(this.props.id) + 1)} replace>
              <img src={arrow} alt="forward" className="right-control"/>
              </Link>
          </div>
        </div>
      )
    }
  }

export default Controls
