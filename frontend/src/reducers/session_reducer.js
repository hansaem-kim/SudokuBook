import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

import {
    RECEIVE_CURRENT_USER_FRIENDS
} from '../actions/follow_actions';
  
const initialState = {
    isAuthenticated: false,
    user: {},
    userFriends: {}
};
  
export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
            ...state,
            isAuthenticated: !!action.currentUser,
            user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return {
            isAuthenticated: false,
            user: undefined,
            userFriends: undefined
            };
        case RECEIVE_USER_SIGN_IN:
            return {
            ...state,
            isSignedIn: true
            };
        case RECEIVE_CURRENT_USER_FRIENDS:
            return Object.assign({}, state, { userFriends: action.users})
        default:
            return state;
    }
}