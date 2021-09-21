import {combineReducers} from 'redux';
import PlayerReducer from './player_reducer';
import SudokusReducer from './sudokus_reducer';
// import PostsReducer from './posts_reducer';
//     posts: PostsReducer

const EntitiesReducer = combineReducers({
    sudokus: SudokusReducer,
    player: PlayerReducer
})

export default EntitiesReducer;
