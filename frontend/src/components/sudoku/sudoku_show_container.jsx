import { connect } from 'react-redux';
import { fetchSudoku } from '../../actions/sudoku_actions';
import SudokuShow from './sudoku_show';

const mSTP = (state, ownProps) => ({
    sudoku: state.entities.sudokus[ownProps.match.params.sudokuId]
})

const mDTP = dispatch => ({
    fetchSudoku: sudokuId => dispatch(fetchSudoku(sudokuId))
})

export default connect(mSTP, mDTP)(SudokuShow);