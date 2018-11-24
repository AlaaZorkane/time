export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async
        const firestore = getFirestore();
        firestore.set({
            collection: 'events', doc: event.id 
        }, event)
        .then(() => {
            dispatch({ type: "ADD_EVENT", event})
        }).catch((err) => {
            dispatch({ type: "ADD_EVENT_ERROR", err})
        })   
    }
}