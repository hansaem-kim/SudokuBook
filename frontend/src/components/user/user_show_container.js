import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import { getFollows, follow, unfollow } from '../../actions/follow_actions';

const mSTP = state => {
    return {
    users: state.entities.users,
    currentUser: state.session.user,
    follows: state.session.userFriends
}}

const mDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    getFollows: id => dispatch(getFollows(id)),
    follow: id => dispatch(follow(id)),
    unfollow: id => dispatch(unfollow(id)),

})

export default connect(mSTP, mDTP)(UserShow);