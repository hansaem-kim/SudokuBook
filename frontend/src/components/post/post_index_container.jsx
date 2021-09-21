import { connect } from "react-redux";
import PostIndex from './post_index';
import { fetchPosts, deletePost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => {
    return ({
        posts: Object.values(state.entities.posts).reverse(),
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = (dispatch) => ({
    fetchPosts: () => (dispatch(fetchPosts())),
    deletePost: (postId) => (dispatch(deletePost(postId))),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(PostIndex);