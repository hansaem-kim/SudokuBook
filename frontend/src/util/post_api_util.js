import axios from 'axios';

export const getPosts = () => {
    return axios.get('/api/posts')
};

export const getUserPosts = id => {
    return axios.get(`/api/posts/user/${id}`)
};

export const createPost = post => {
    return axios.post('/api/posts/', post)
}

export const updatePost = post => {
    return axios.patch(`/api/posts/${post._id}`, post)
}

export const deletePost = postId => {
    return axios.delete(`/api/posts/${postId}`)
}