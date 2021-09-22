import axios from 'axios';

export const getSudokus = () => {
    return axios.get('/api/sudokus')
}

export const getSudoku = id => {
    return axios.get(`/api/sudokus/${id}`)
}

export const patchSudoku = (data) => {
    return axios.patch(`/api/sudokus`, data)
}