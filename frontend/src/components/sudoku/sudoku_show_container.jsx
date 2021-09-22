import { connect } from 'react-redux';
import { fetchSudokus, fetchSudoku, receiveAnswer, receiveTime, updateSudoku } from '../../actions/sudoku_actions';
import SudokuShow from './sudoku_show';
import {openModal} from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    let currentSudoku;
    if (state.entities.sudokus.data){
        state.entities.sudokus.data.forEach( (sudoku, index) => {
            if (state.entities.sudokus.data[index]._id === ownProps.match.params.sudokuId) {
                currentSudoku = state.entities.sudokus.data[index];
            }
        })
    }

    return{
        sudoku: currentSudoku,
        currentUser: state.session.user
    }

}

const mDTP = dispatch => ({
    fetchSudokus: () => dispatch(fetchSudokus()),
    fetchSudoku: sudokuId => dispatch(fetchSudoku(sudokuId)),
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    receiveTime: time => dispatch(receiveTime(time)),
    openModal: (modal, id) =>  dispatch(openModal(modal, id)),
    updateUser: (user) => dispatch(updateUser(user)),
    updateSudoku: (data) => dispatch(updateSudoku(data))

})

export default connect(mSTP, mDTP)(SudokuShow);