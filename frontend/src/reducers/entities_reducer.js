import {combineReducers} from 'redux';
import PlayerReducer from './player_reducer';
import SudokusReducer from './sudokus_reducer';
import PostsReducer from './posts_reducer';
import UsersReducer from "./users_reducer";
import FollowReducer from './follows_reducer';
import FollowerReducer from './followers_reducer';


const EntitiesReducer = combineReducers({
    sudokus: SudokusReducer,
    posts: PostsReducer,
    users: UsersReducer,
    player: PlayerReducer,
    follows: FollowReducer,
    followers: FollowerReducer,
})

export default EntitiesReducer;
