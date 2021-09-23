import {connect} from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Instructions from './instructions';

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mDTP)(Instructions)