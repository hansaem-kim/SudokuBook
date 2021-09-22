import { connect } from 'react-redux';
import { fetchSudoku, receiveAnswer, receiveTime } from '../../actions/sudoku_actions';
import SudokuShow from './sudoku_show';
import {openModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    sudoku: state.entities.sudokus[ownProps.match.params.sudokuId]
})

const mDTP = dispatch => ({
    fetchSudoku: sudokuId => dispatch(fetchSudoku(sudokuId)),
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    receiveTime: time => dispatch(receiveTime(time)),
    openModal: (modal, id) =>  dispatch(openModal(modal, id))
})

export default connect(mSTP, mDTP)(SudokuShow);