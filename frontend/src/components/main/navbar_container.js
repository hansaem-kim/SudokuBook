import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { getFollows, getFollowers, getUserFollows } from '../../actions/follow_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchFollowers: id => dispatch(getFollowers(id)),
    fetchFollows: id => dispatch(getFollows(id)),
    fetchUserFollows: id => dispatch(getUserFollows(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);