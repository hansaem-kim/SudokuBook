import { RECEIVE_POSTS, RECEIVE_NEW_POST, REMOVE_POST } from '../actions/post_actions';

const PostsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_POSTS:
            newState = action.posts.data;
            return newState;
        case RECEIVE_NEW_POST:
            newState[action.post.id] = JSON.parse(action.post.config.data);
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        default:
            return oldState;
    }
}

export default PostsReducer;