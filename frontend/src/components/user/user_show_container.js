import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import { getFollows, follow, unfollow } from '../../actions/follow_actions';
import { fetchPosts, deletePost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = state => {
    return {
    users: state.entities.users,
    currentUser: state.session.user,
    follows: state.session.userFriends,
    posts: Object.values(state.entities.posts).reverse()
}}

const mDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    getFollows: id => dispatch(getFollows(id)),
    follow: id => dispatch(follow(id)),
    unfollow: id => dispatch(unfollow(id)),
    fetchPosts: () => (dispatch(fetchPosts())),
    closeModal: () => dispatch(closeModal()),
    deletePost: id => dispatch(deletePost(id))
})

export default connect(mSTP, mDTP)(UserShow);