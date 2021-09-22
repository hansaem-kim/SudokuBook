import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import idFinderReducer from "./id_finder_reducer";
import TimeReducer from './time_reducer';


const uiReducer = combineReducers({
  modal: modalReducer,
  idFinder: idFinderReducer,
  time: TimeReducer
});

export default uiReducer;