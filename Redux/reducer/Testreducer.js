import {INCREASE, DECREASE,TRUE,FALSE} from '../action/type';

const initialState = 0;

const Testreducer= (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
    return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}

export default Testreducer;