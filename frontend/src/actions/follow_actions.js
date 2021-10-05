import * as Util from '../util/follow_api_util';

export const RECEIVE_CURRENT_USER_FRIENDS = 'RECEIVE_CURRENT_USER_FRIENDS';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
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
});

const receive_follows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
});

const receive_followers = followers => ({
    type: RECEIVE_FOLLOWERS,
    followers
})

export const getUserFollows = id => dispatch => (
    Util.fetchFollows(id).then(follows => dispatch(receive_current_user_friends(follows)))
);

export const follow = id => dispatch => (
    Util.follow(id).then(follow => dispatch(receive_follow(follow)))
);

export const unfollow = id => dispatch => (
    Util.unfollow(id).then(follow => dispatch(remove_follow(follow)))
);

export const getFollows = id => dispatch => (
    Util.fetchFollows(id).then(follows => dispatch(receive_follows(follows)))
);

export const getFollowers = id => dispatch => (
    Util.fetchFollowers(id).then(followers => dispatch(receive_followers(followers)))
);