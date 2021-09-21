import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchPosts } from "../../actions/post_actions";

import Feed from './feed'

const mSTP = (state) => {
    const posts = state.entities.posts;
    const currentUser = state.session.user.username;
    return ({
        posts,
        currentUser
    })
};

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    openModal: (modal) => dispatch(openModal(modal))

});

export default connect(mSTP, mDTP)(Feed);