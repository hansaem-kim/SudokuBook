import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import { getFollows, getFollowers, follow, unfollow, getUserFollows } from '../../actions/follow_actions';
import { fetchPosts, deletePost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = state => {

    let fr;
    if (!state.session.userFriends){
        fr = [];
    }else{
        fr = state.session.userFriends;
    }



    return {
        currentUser: state.session.user,
        follows: state.entities.follows,
        followers: state.entities.followers,
        posts: Object.values(state.entities.posts).reverse(),
        userFollows: fr,
        users: Object.values(state.entities.users),
    }
}

const mDTP = dispatch => ({
    fetchFollowers: id => dispatch(getFollowers(id)),
    fetchFollows: id => dispatch(getFollows(id)),
    fetchUserFollows: id => dispatch(getUserFollows(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    follow: id => dispatch(follow(id)),
    unfollow: id => dispatch(unfollow(id)),
    fetchPosts: () => (dispatch(fetchPosts())),
    closeModal: () => dispatch(closeModal()),
    deletePost: id => dispatch(deletePost(id))
})

export default connect(mSTP, mDTP)(UserShow);