import { connect } from 'react-redux';
import { fetchSudoku, receiveAnswer } from '../../actions/sudoku_actions';
import SudokuShow from './sudoku_show';

const mSTP = (state, ownProps) => ({
    sudoku: state.entities.sudokus[ownProps.match.params.sudokuId]
})

const mDTP = dispatch => ({
    fetchSudoku: sudokuId => dispatch(fetchSudoku(sudokuId)),
    receiveAnswer: answer => dispatch(receiveAnswer(answer))
})

export default connect(mSTP, mDTP)(SudokuShow);