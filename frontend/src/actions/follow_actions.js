import * as Util from '../util/follow_api_util';

export const RECEIVE_CURRENT_USER_FRIENDS = 'RECEIVE_CURRENT_USER_FRIENDS';

const receive_current_user_friends = id => ({
    type: RECEIVE_CURRENT_USER_FRIENDS,
    id
})

export const getFollows = id => dispatch => (
    Util.fetchFollows(id).then(users => dispatch(receive_current_user_friends(users)))
)