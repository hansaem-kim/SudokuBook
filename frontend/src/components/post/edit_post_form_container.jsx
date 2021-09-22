import { connect } from 'react-redux';
import { closeModal} from '../../actions/modal_actions';
import { updatePost } from '../../actions/post_actions';
import PostForm from './post_form';

const mSTP = (state) => {
    let currentPost;
    if(Array.isArray(state.entities.posts)){
        state.entities.posts.forEach(post => {
            if (post._id == state.ui.idFinder){
                currentPost = post;
            }
        })
    }else{
        for (const property in state.entities.posts) {
            if (state.entities.posts[property]._id === state.ui.idFinder){
                currentPost = state.entities.posts[property];
            }
        }
    }
    return {
        currentUser: state.session.user,
        formType: 'Edit Post',
        post: currentPost,
        modal: state.ui.modal,
    }

};
  
const mDTP = (dispatch) => ({
    action: (post) => (dispatch(updatePost(post))),
    closeModal: () => dispatch(closeModal()),
});
  
export default connect(mSTP, mDTP)(PostForm);
  
