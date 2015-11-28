/* This is where we start the actual stores of truth 
FLOW: COMPONENT->ACTION(or action creator)->Reducer->Dispatcher->Store
*/
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

/* Actions Return the actual information of the reducer
This is in turn dispatched with the information back
* Declare these as props in your components
*/

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

/* Action Creators are calls to implement an Action
These are received from your components.  Use these to pass the data the actions will need.
*/


export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}


