import axios from 'axios';

export const follow = id => (
    axios.post(`/api/follows/${id}`)
);

export const fetchFollows = currentUserId => (
    axios.get(`/api/follows/${currentUserId}`)
);

export const unfollow = id => (
    axios.delete(`/api/follows/${id}`)
);