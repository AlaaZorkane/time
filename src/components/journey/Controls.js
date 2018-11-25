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
    this.state = {
        id: Number,
    }
  }
  propsToState() {
    var id = Number(this.props.id);
    this.setState({id})
  }
  componentDidMount() {
    this.propsToState();
  }
  render() {
    var { id } = this.state
    if ( this.props.id > 1) {
      return (
        <div className="Controls">
          <div className="right-wrapper">
            <Link to={'/journey/' + ++id}>
            <img src={arrow} alt="forward" className="right-control" onClick={ () => this.setState({id: ++id}) }/>
            </Link>
          </div>
          <div className="left-wrapper">
            <Link to={'/journey/' + --id}>
            <img src={arrow} alt="backward" className="left-control" onClick={ () => this.setState({id: --id}) }/>
            </Link>
          </div>
        </div>
      )
    }
    return (
        <div className="Controls">
          <div className="right-wrapper">
            <Link to={'/journey/' + ++id}>
            <img src={arrow} alt="forward" className="right-control" onClick={ () => this.setState({id: ++id}) }/>
            </Link>
          </div>
        </div>
    )
  }
}

export default Controls
