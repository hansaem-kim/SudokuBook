import {combineReducers} from 'redux';
import SudokusReducer from './sudokus_reducer';
// import PostsReducer from './posts_reducer';
//     posts: PostsReducer

const EntitiesReducer = combineReducers({
    sudokus: SudokusReducer,
})

export default EntitiesReducer;
