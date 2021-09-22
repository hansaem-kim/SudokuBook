import { connect } from 'react-redux';
import { fetchPosts }  from "../../actions/post_actions";

import Search from './search';

const mapStateToProps = state => ({
    posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => (dispatch(fetchPosts())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);