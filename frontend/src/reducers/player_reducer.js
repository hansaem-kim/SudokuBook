import { RECEIVE_ANSWER } from "../actions/sudoku_actions";

const PlayerReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ANSWER:
            return action.answer.flat();
        default:
            return oldState;
    }
}

export default PlayerReducer;