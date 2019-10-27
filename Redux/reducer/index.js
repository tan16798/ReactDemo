import {combineReducers} from 'redux';
import Testreducer from './Testreducer';
import Continuereducer from './Continue';
import Formsummary from './Formsummary'
const rootreducer= combineReducers({
  counter:Testreducer,
  continue:Continuereducer,
  save:Formsummary
});
export default rootreducer;