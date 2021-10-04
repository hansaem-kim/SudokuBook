import * as Util from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receiveUserPosts = posts => ({
    type: RECEIVE_USER_POSTS,
    posts
});

export const receiveNewPost = post => ({
    type: RECEIVE_NEW_POST,
    post
});

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const fetchPosts = () => dispatch => (
    Util.getPosts()
        .then(posts => dispatch(receivePosts(posts)))
        // .catch(err => console.log(err))
);

export const fetchUserPosts = id => dispatch => (
    Util.getUserPosts(id)
        .then(posts => dispatch(receiveUserPosts(posts)))
        // .catch(err => console.log(err))
);

export const createPost = post => dispatch => (
    Util.createPost(post)
        .then(post => dispatch(receiveNewPost(post)))
        // .catch(err => console.log(err))
);

export const updatePost = post => dispatch => (
    Util.updatePost(post)
        .then(post => dispatch(receiveNewPost(post)))
        // .catch(err => console.log(err))
);

export const deletePost = id  => dispatch => (
    Util.deletePost(id).then(() => dispatch(removePost(id)))
)


