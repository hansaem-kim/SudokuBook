import React from 'react';
import Input from '../input/input'
// <Input />
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchSudokus();

    }
    handleClick() {
        if (this.props.sudokus.data) {
            const sudoku  = this.props.sudokus.data[Math.floor(Math.random() * (13 + 1) )];
            this.props.history.push(`/sudokus/${sudoku._id}`);
        }
    }

    render() {
        return (
            <div className="home-page-wrapper">
                <div className="home-page-content">
                    <h1>Ready to play sudoku?</h1>
                    <p>If you are ready, challenge it</p>
                    <button onClick={this.handleClick}>Right Now!</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);