import * as actionTypes from '../actions';

const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.v,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.v,
      };
  }
  return state;
};

export default reducer;
