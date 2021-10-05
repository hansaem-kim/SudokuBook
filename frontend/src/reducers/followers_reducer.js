import { RECEIVE_FOLLOWERS } from '../actions/follow_actions'

const FollowersReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_FOLLOWERS:
            return action.followers.data;
        default:
            return oldState;
    }
}

export default FollowersReducer;