const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
  counter: 0,
};

// Reducer

const rootReducer = (state = intialState, action) => {
  if (action.type === 'INC_COUNTER') {
    //because js objects are immutable, cannot do return counter + 1. Have to return new object
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'ADD_COUNTER') {
    //because js objects are immutable, cannot do return counter + 1. Have to return new object
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription (Triggered whenever action is dispatched)
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
