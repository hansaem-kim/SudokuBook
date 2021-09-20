import { RECEIVE_SUDOKU, RECEIVE_SUDOKUS } from "../actions/sudoku_actions";

const SudokusReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SUDOKUS:
            return action.sudokus
        case RECEIVE_SUDOKU:
            return action.sudoku
        default:
            return oldState;
    }
}

export default SudokusReducer;