import {combineReducers} from 'redux';
import SudokusReducer from './sudokus_reducer';
import PostsReducer from './posts_reducer';
import UsersReducer from "./users_reducer";



const EntitiesReducer = combineReducers({
    sudokus: SudokusReducer,
    posts: PostsReducer,
    users: UsersReducer,
})

export default EntitiesReducer;
