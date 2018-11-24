/* Libraries */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

/* Components */
import Body from './Body'
import Controls from './Controls'

/* CSS & Assets */
import '../../css/components/journey/Journey.css'
import infinityloading from '../../assets/infinityloading.svg'

/* JS */

/* Journey calls from noSQL json server 
  and parses it into to the DOM
*/

class Journey extends Component {
  constructor(props) {
    super()
  }
  render() {
    const { event } = this.props
      if (event) {
        return (
          <div className="Journey-Container">
            <Body event={event} key={event.id}/>
            <Controls />
          </div>
        )
      } else {
      return (
        <div className="Journey-Container">
          <div className="loading-wrapper">
            <img src={infinityloading} alt="loading"/>
          </div>
        </div>
      )
    }  
  }
}


const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null
  return {
    event
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'events'
  }])
)(Journey)
