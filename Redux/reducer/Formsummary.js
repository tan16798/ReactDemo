import {SAVE_CAR,SAVE_YEAR, SAVE_GENDER, SAVE_BIRTHDAY} from '../action/type';
const initContinue ={car:"", year:"",gender:"",birthday:{day:"",month:"",year:""}}
const Formsummary= (state =initContinue , action) => {
  switch (action.type) {
    case SAVE_CAR:
    return {...state, car : action.data}

    case SAVE_YEAR:
    return {...state,year : action.data}

    case SAVE_GENDER:
    return {...state,gender : action.data}

    case SAVE_BIRTHDAY:
    return {...state,birthday :action.data}
    default:
      return state;
  }
}
export default Formsummary;