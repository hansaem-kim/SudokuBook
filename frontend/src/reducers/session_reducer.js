import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

import {
    RECEIVE_CURRENT_USER_FRIENDS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../actions/follow_actions';
  
const initialState = {
    isAuthenticated: false,
    user: {},
    userFriends: []
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
            userFriends: []
            };
        case RECEIVE_USER_SIGN_IN:
            return {
            ...state,
            isSignedIn: true
            };
        case RECEIVE_CURRENT_USER_FRIENDS:
            return Object.assign({}, state, { userFriends: action.follows.data})
        case RECEIVE_FOLLOW:
            let newArr = state.userFriends;
            newArr.push(action.follow.data);
            
            return Object.assign({}, state, { userFriends: newArr });
        case REMOVE_FOLLOW: 
            let newSmallerArr = state.userFriends;
            for (let i = 0; i < newSmallerArr.length; i++){
                if (action.follow.data.followee == newSmallerArr[i].followee){
                    newSmallerArr.splice(i, 1);
                }
            }
            return Object.assign({}, state, { userFriends: newSmallerArr })
        default:
            return state;
    }
}