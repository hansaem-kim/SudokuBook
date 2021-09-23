import { RECEIVE_TIME } from "../actions/sudoku_actions";
import {RECEIVE_NEW_POST} from "../actions/post_actions";

const TimeReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_TIME:
            return action.time;
        case RECEIVE_NEW_POST:
            return {};
        default:
            return oldState;
    }
}

export default TimeReducer;