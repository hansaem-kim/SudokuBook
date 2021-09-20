import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './main/main_page';

const App = () => (
    <div>
        <Switch>
        <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;