import { RECEIVE_FOLLOWS } from '../actions/follow_actions'

const FollowsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows.data;
        default:
            return oldState;
    }
}

export default FollowsReducer;