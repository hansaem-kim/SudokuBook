import React from 'react';
import Board from '../game/board'

class SudokuShow extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    componentDidMount(){
        this.props.fetchSudoku(this.props.match.params.sudokuId);
    }

    render() {
        if (!this.props.sudoku) return null;
        const {sudoku} = this.props;

        return (
            <div>
                <p>HI!</p>
                {/* <p>{sudoku.puzzle}</p> */}
                <Board puzzle={sudoku.puzzle}/> 
            </div>
        )
    }
}

export default SudokuShow;
