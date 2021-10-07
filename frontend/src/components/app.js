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
import UserShowContainer from './user/user_show_container';
import About from './about/about';

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <ProtectedRoute exact path='/about' component={About} />
            <Route exact path="/" component={MainPageContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <ProtectedRoute exact path={`/sudokus/:sudokuId`} component={SudokuShowContainer} />
            <ProtectedRoute exact path='/feed' component={FeedContainer} />
            <ProtectedRoute exact path='/:userId' component={(props) => <UserShowContainer  {...props} key={window.location.pathname} />} />

        </Switch>

        <FooterContainer />
    </div>
);

export default App;