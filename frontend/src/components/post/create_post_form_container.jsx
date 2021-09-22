import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { closeModal} from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
    currentUser: state.session.user,
    time: state.ui.time,
    sudokuId: state.ui.idFinder,
    post: {
        user: state.session.id,
        text: ""
    },
    formType: "Create Post",
}};

const mDTP = (dispatch) => ({
    action: (post) => (dispatch(createPost(post))),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP,mDTP)(PostForm);