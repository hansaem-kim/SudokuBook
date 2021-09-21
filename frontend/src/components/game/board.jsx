import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props){
        super(props)
        this.createTwoDArray = this.createTwoDArray.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
    }
    // this.props.puzzle = [NUMBERS]

    createTwoDArray(puzzle){
        let i = 0;
        let j = 0;
        let k = 0;
        const finalArr = [];
        
        while (i < 81) {
            while (j < 9) {
                let row = [];
                while (k < 9){
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

    renderBoard(transformedPuzzle){
        const board = [];
        for (let i = 0; i < transformedPuzzle.length; i++) {
            const row = [];
            for (let j = 0; j < transformedPuzzle.length; j++) {
                const element = transformedPuzzle[i][j];
                const tile = <Tile 
                                value={element}
                                coordinates={[i,j]}
                                key={[i,j]}
                            />
                row.push(tile);
            }
            board.push(row);
        }
        return board;
    }

    render() {
        const twoD = this.createTwoDArray(this.props.puzzle);
        const renderedBoard = this.renderBoard(twoD);
        return (
            <div>
                <p>THIS IS IN BOARD COMPONENT</p>
                {renderedBoard}
            </div>
        )
    }
}

export default Board;