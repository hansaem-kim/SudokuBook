import React from 'react';
import Input from '../input/input'
// <Input />
import { Link } from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.generateRandom = this.generateRandom.bind(this);

        this.props.fetchSudokus();
        this.state = {
            value: 0,
            display: false
        };
    }

    handleClick(e) {
        e.preventDefault();
    }

    generateRandom() {
        this.setState({
            value: Math.floor(Math.random() * (13 + 1) ),
            display: true
        });
    }

    playButton() {
        if (this.props.sudokus.data) {
            const sudoku  = this.props.sudokus.data[this.state.value];
            console.log(sudoku)

            return (
                <Link className="random-sudoku-link" key={sudoku._id} to={`/sudokus/${sudoku._id}`} >
                    <button>Play</button>
                </Link>
            )
        }
    }

    render() {
        return (
            <div>
                <h1>home</h1>
                <p>Play random sudoku game</p>
                <button onClick={this.generateRandom}>Generate</button>
                {this.playButton()}
            </div>
        );
    }
}

export default Home;