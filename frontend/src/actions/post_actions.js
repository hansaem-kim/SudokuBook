import { getPosts, getUserPosts, writePost, changePost, removePost, getPost } from '../util/post_api_util';

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

export const removePost = id => ({
    type: REMOVE_POST,
    id
});

export const fetchPosts = () => dispatch => (
    getPosts()
        .then(posts => dispatch(receivePosts(posts)))
        .catch(err => console.log(err))
);

export const fetchUserPosts = id => dispatch => (
    getUserPosts(id)
        .then(posts => dispatch(receiveUserPosts(posts)))
        .catch(err => console.log(err))
);

export const createPost = data => dispatch => (
    writePost(data)
        .then(post => dispatch(receiveNewPost(post)))
        .catch(err => console.log(err))
);

export const editPost = data => dispatch => (
    changePost(data)
        .then(post => dispatch(receiveNewPost(post)))
        .catch(err => console.log(err))
);

export const deletePost = id => dispatch => (
    removePost(id)
        .then(() => dispatch(removePost(id)))
        .catch(err => console.log(err))
);

export const fetchPost = id => dispatch => (
    getPost(id).then(post => dispatch(receiveNewPost(post)))
        .catch(err => console.log(err))
)