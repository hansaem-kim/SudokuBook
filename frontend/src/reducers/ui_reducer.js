import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import idFinderReducer from "./id_finder_reducer";


const uiReducer = combineReducers({
  modal: modalReducer,
  idFinder: idFinderReducer

});

export default uiReducer;