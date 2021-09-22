import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from './main/main_page_container';
import Modal from './modal/modal';
import HomeContainer from './main/home_container';
import SudokuShowContainer from './sudoku/sudoku_show_container';
import FeedContainer from './feed/feed_container';
import UserShowContainer from './user/user_show_container';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact path="/" component={MainPageContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <Route exact path={`/sudokus/:sudokuId`} component={SudokuShowContainer} />
            <ProtectedRoute exact path='/feed' component={FeedContainer} />
            <Route exact path='/:userId' component={UserShowContainer} />
            
        </Switch>
    </div>
);

export default App;