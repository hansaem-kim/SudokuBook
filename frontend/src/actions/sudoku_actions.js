import {getSudokus, getSudoku} from '../util/sudoku_api_util';

export const RECEIVE_SUDOKUS = 'RECEIVE_SUDOKUS';
export const RECEIVE_SUDOKU = 'RECEIVE_SUDOKU';

const receiveSudokus = sudokus => ({
    type: RECEIVE_SUDOKUS,
    sudokus 
});

const receiveSudoku = sudoku => ({
    type: RECEIVE_SUDOKU,
    sudoku
});

export const fetchSudokus = () => dispatch => (
    getSudokus()
        .then(sudokus => dispatch(receiveSudokus(sudokus)))
        .catch(err => console.log(err))
);

export const fetchSudoku = id => dispatch => (
    getSudoku(id)
        .then(sudoku => dispatch(receiveSudoku(sudoku)))
        .catch(err => console.log(err))
);