import axios from 'axios';

export const getPosts = () => {
    return axios.get('/api/posts')
};

export const getUserPosts = id => {
    return axios.get(`/api/posts/user/${id}`)
};

export const writePost = data => {
    return axios.post('/api/posts/', data)
}

export const changePost = data => {
    return axios.patch(`api/posts/${data.id}`, data)
}

export const removePost = id => {
    return axios.delete(`api/posts/${id}`)
}

export const getPost = id => {
    return axios.get(`api/posts/${id}`)
}