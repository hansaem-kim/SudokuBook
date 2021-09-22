import * as Util from '../util/follow_api_util';

export const RECEIVE_CURRENT_USER_FRIENDS = 'RECEIVE_CURRENT_USER_FRIENDS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receive_current_user_friends = follows => ({
    type: RECEIVE_CURRENT_USER_FRIENDS,
    follows
});

const receive_follow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const remove_follow = follow => ({
    type: REMOVE_FOLLOW,
    follow
})

export const getFollows = id => dispatch => (
    Util.fetchFollows(id).then(follows => dispatch(receive_current_user_friends(follows)))
);

export const follow = id => dispatch => (
    Util.follow(id).then(follow => dispatch(receive_follow(follow)))
);

export const unfollow = id => dispatch => (
    Util.unfollow(id).then(follow => dispatch(remove_follow(follow)))
);