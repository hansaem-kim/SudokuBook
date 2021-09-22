import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { receiveAnswer } from '../../actions/sudoku_actions';
import EndGameModal from './end_game_modal';

const mSTP = (state, ownProps) => {
    return {
    currentUser: state.session.user.id,
    time: state.ui.time,
    sudokuId: state.ui.idFinder  
}}

const mDTP = dispatch => ({
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EndGameModal);