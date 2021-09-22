import { RECEIVE_TIME } from "../actions/sudoku_actions";

const TimeReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_TIME:
            return action.time;
        default:
            return oldState;
    }
}

export default TimeReducer;