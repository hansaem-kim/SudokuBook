import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPosts, deletePost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    currentUser: state.session.user,
    posts: Object.values(state.entities.posts).reverse()
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => (dispatch(fetchPosts())),
    deletePost: (postId) => (dispatch(deletePost(postId))),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);