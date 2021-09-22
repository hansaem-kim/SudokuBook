import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = state => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);