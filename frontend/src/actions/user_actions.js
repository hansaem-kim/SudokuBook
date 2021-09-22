import * as Util from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const fetchUser = (id) => dispatch => (
    Util.getUser(id)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
);

export const updateUser = (user) => dispatch => (
    Util.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
);


export const fetchUsers = () => dispatch => (
    Util.getUsers()
        .then(users => dispatch(receiveUsers(users)))
        .catch(err => console.log(err))
);