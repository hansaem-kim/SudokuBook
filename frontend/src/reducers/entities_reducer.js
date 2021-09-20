import {combineReducers} from 'redux';
import SudokusReducer from './sudokus_reducer';
import PostsReducer from './posts_reducer';

const EntitiesReducer = combineReducers({
    sudokus: SudokusReducer
    // posts: PostsReducer
})

export default EntitiesReducer;
