import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPosts, deletePost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";
import { getFollows } from '../../actions/follow_actions'

const mapStateToProps = state => {
  let fr;
  if (!state.session.userFriends){
    fr = [];
  }else{
    fr = state.session.userFriends;
  }
  return {
    currentUser: state.session.user,
    posts: Object.values(state.entities.posts).reverse(),
    friends: fr,
    users: Object.values(state.entities.users)
}};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => (dispatch(fetchPosts())),
    deletePost: (postId) => (dispatch(deletePost(postId))),
    closeModal: () => dispatch(closeModal()),
    fetchFollows: id => dispatch(getFollows(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);