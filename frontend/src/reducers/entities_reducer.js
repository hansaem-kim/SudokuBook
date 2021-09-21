import {combineReducers} from 'redux';
import PlayerReducer from './player_reducer';
import SudokusReducer from './sudokus_reducer';
import PostsReducer from './posts_reducer';
import UsersReducer from "./users_reducer";



const EntitiesReducer = combineReducers({
    sudokus: SudokusReducer,
    posts: PostsReducer,
    users: UsersReducer,
    player: PlayerReducer
})

export default EntitiesReducer;
