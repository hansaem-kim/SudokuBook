import React from 'react';
import Board from '../game/board'

class SudokuShow extends React.Component {
    constructor(props){
        super(props)
        this.createTwoDArray = this.createTwoDArray.bind(this);

        this.state = {showboard: false};

        this.startGame = this.startGame.bind(this);
    }

    componentDidMount(){
        this.props.fetchSudokus();
        // this.props.fetchSudoku(this.props.match.params.sudokuId);
    }

    createTwoDArray(puzzle) {
        let i = 0;
        let j = 0;
        let k = 0;
        const finalArr = [];

        while (i < 81) {
            while (j < 9) {
                let row = [];
                while (k < 9) {
                    row.push(puzzle[i]);
                    i += 1;
                    k += 1;
                }
                finalArr.push(row);
                j += 1;
                k = 0;
            }
            j = 0;
        }
        return finalArr;
    }

    startGame() {
        this.setState({showboard: true});
    }

    render() {
        if (!this.props.sudoku) return null;
        const {sudoku} = this.props;
        const twoD = this.createTwoDArray(sudoku.puzzle);

        function compare(a,b){
            if (a.time.minutes < b.time.minutes){
                return -1;
            }else if (a.time.minutes > b.time.minutes){
                return 1;
            }else{
                if (a.time.seconds < b.time.seconds){
                    return -1;
                }else if (a.time.seconds > b.time.seconds){
                    return 1;
                }else{
                    return 0;
                }
            }
        }

        let sortedScores = sudoku.scores.sort(compare);



        const sudokuScores = sudoku.scores.length !== 0 ? sortedScores.map(score => {
            
            let clockMinutes = score.time.minutes;
            let clockSeconds = score.time.seconds;
            clockMinutes = (clockMinutes < 10) ? `0${clockMinutes}` : clockMinutes;
            clockSeconds = (clockSeconds < 10) ? `0${clockSeconds}` : clockSeconds;

            return <li>{score.user.username} - {clockMinutes}:{clockSeconds}</li> 
        }) : null

        const board = this.state.showboard ?                     
                                            <Board 
                                                twoD={twoD} 
                                                receiveAnswer={this.props.receiveAnswer}
                                                receiveTime={this.props.receiveTime}
                                                openModal={this.props.openModal}
                                                sudokuId={sudoku._id}
                                                answer={sudoku.answer}
                                                updateUser={this.props.updateUser}
                                                currentUser={this.props.currentUser}
                                                updateSudoku={this.props.updateSudoku}
                                            /> : null;

        const coverButton = !this.state.showboard ? (
            <button onClick={this.startGame}>Start Game</button>  
            ) : null;

        return (
            <div>
                <p>HI!</p>
                {coverButton}

                <div className='board-container'>
                    {board}
                </div>

                <div className='leaderboard'>
                    <ul>
                        {sudokuScores}
                    </ul>
                </div>
            </div>

        )
    }
}

export default SudokuShow;
