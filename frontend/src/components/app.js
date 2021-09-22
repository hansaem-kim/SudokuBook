import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from './main/main_page_container';
import Modal from './modal/modal';
import HomeContainer from './main/home_container';
import NavBarContainer from './main/navbar_container';
import SudokuShowContainer from './sudoku/sudoku_show_container';
import FooterContainer from './main/footer_container';
import ProfileContainer from './profile/profile_container';
import FeedContainer from './feed/feed_container';

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={MainPageContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <Route exact path={`/sudokus/:sudokuId`} component={SudokuShowContainer} />
            <ProtectedRoute exact path='/feed' component={FeedContainer} />
        </Switch>
        <FooterContainer />
    </div>
);

export default App;