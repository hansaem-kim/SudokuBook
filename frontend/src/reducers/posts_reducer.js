import { RECEIVE_POSTS, RECEIVE_USER_POSTS, RECEIVE_NEW_POST } from '../actions/post_actions';

const PostsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_USER_POSTS:
            return Object.assign({}, oldState, {[action.post.id]: action.post});
        case RECEIVE_NEW_POST:
            return null;
    }
}

export default PostsReducer;