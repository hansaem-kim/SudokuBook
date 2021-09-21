import * as Util from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
// export const REMOVE_USER = "REMOVE_USER";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

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


