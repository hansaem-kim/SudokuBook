import React from 'react';

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
                <p>{sudoku.puzzle}</p>
            </div>
        )
    }
}

export default SudokuShow;