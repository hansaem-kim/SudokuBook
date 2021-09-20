import axios from 'axios';

export const getSudokus = () => {
    return axios.get('/api/sudokus')
}

export const getSudoku = id => {
    return axios.get(`/api/sudokus/${id}`)
}
