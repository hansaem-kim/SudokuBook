import {getSudokus, getSudoku, patchSudoku} from '../util/sudoku_api_util';

export const RECEIVE_SUDOKUS = 'RECEIVE_SUDOKUS';
export const RECEIVE_SUDOKU = 'RECEIVE_SUDOKU';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_TIME = 'RECEIVE_TIME';

const receiveSudokus = sudokus => ({
    type: RECEIVE_SUDOKUS,
    sudokus 
});

const receiveSudoku = sudoku => ({
    type: RECEIVE_SUDOKU,
    sudoku
});

export const receiveAnswer = (answer) => ({
    type: RECEIVE_ANSWER,
    answer
})

export const receiveTime = time => ({
    type: RECEIVE_TIME, 
    time
})

export const fetchSudokus = () => dispatch => (
    getSudokus()
        .then(sudokus => dispatch(receiveSudokus(sudokus)))
        // .catch(err => console.log(err))
);

export const fetchSudoku = id => dispatch => (
    getSudoku(id)
        .then(sudoku => dispatch(receiveSudoku(sudoku.data)))
        // .catch(err => console.log(err))
);

export const updateSudoku = data => dispatch => (
    patchSudoku(data)
        .then(sudoku => dispatch(receiveSudoku(sudoku.data)))
        // .catch(err => console.log(err))
);