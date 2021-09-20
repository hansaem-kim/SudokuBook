import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import SudokuShowContainer from './sudoku/sudoku_show_container';

const App = () => (
    <div>
        <Switch>
        <Route exact path={`/sudokus/:sudokuId`} component={SudokuShowContainer} />
        <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;