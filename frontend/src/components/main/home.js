import React from 'react';
import Input from '../input/input'
// <Input />
import { withRouter } from 'react-router-dom';



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.props.fetchSudokus();
        this.state = {
            value: 0,
            display: false
        };
    }

    handleClick() {
        this.setState({
            value: Math.floor(Math.random() * (13 + 1) ),
            display: true
        });
        if (this.props.sudokus.data) {
            const sudoku  = this.props.sudokus.data[this.state.value];
            console.log(sudoku)
            this.props.history.push(`/sudokus/${sudoku._id}`);
        }
    }

    render() {
        return (
            <div className="home-page-wrapper">
                <div className="home-page-content">
                    <h1>Ready to play sudoku?</h1>
                    <p>If you are ready, challenge it 
                        <button onClick={this.handleClick}>Right Now!</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);