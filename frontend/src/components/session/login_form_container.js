import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);