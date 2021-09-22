import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import { getFollows } from '../../actions/follow_actions';

const mSTP = state => {
    
    return {
    users: state.entities.users,
    currentUser: state.session.user

}}

const mDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    getFollows: id => dispatch(getFollows(id))
})

export default connect(mSTP, mDTP)(UserShow);