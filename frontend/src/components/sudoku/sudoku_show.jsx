import React from 'react';
import Board from '../game/board'

class SudokuShow extends React.Component {
    constructor(props){
        super(props)
        this.createTwoDArray = this.createTwoDArray.bind(this);
    }

    componentDidMount(){
        this.props.fetchSudoku(this.props.match.params.sudokuId);
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



    render() {
        if (!this.props.sudoku) return null;
        const {sudoku} = this.props;
        const twoD = this.createTwoDArray(sudoku.puzzle);

        return (
            <div>
                <p>HI!</p>
                <Board 
                    twoD={twoD} 
                    receiveAnswer={this.props.receiveAnswer}
                    answer={sudoku.answer}
                /> 
            </div>
        )
    }
}

export default SudokuShow;
