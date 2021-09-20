import React from 'react';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';


const App = () => (
    <div>
        <Switch>
        <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;