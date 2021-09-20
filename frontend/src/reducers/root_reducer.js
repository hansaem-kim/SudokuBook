import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import session from './session_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session
});

export default RootReducer;