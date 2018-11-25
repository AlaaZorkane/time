const initState = {}

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    /* add event */
    case 'ADD_EVENT':
      console.log('Added the event successfully to the DB :)', action.event)
      return state;

    /* error handling */
    case 'ADD_EVENT_ERROR':
      console.log('ERROR:', action.err)
      return state;

    /* default state */
    default:
      return state;
  }
}

export default eventReducer;