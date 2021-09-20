import { RECEIVE_SUDOKU, RECEIVE_SUDOKUS } from "../actions/sudoku_actions";

const SudokusReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SUDOKUS:
            return action.sudokus
        case RECEIVE_SUDOKU:
            let newState = Object.assign({}, oldState)
            newState[action.sudoku._id] = action.sudoku;
            return newState;
        default:
            return oldState;
    }
}

export default SudokusReducer;