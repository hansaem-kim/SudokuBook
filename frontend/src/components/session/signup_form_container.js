import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);