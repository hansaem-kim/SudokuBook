import { RECEIVE_POSTS, RECEIVE_NEW_POST, REMOVE_POST } from '../actions/post_actions';

const PostsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    let goodState = {}
    for (const property in newState) {
        goodState[newState[property]._id] = newState[property];
    }
    switch (action.type) {
        case RECEIVE_POSTS:
            goodState = action.posts.data;
            return {...goodState}
        case RECEIVE_NEW_POST:
            // newState[action.post.id] = JSON.parse(action.post.config.data);
            goodState[action.post.data._id] = action.post.data
            return goodState
            // return Object.assign({}, oldState, {[action.post.data._id]: action.post.data});
        case REMOVE_POST:
            delete goodState[action.postId];
            return goodState;
        default:
            return oldState;
    }
}

export default PostsReducer;