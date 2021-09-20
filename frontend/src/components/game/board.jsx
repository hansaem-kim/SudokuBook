import React from 'react';

import React from 'react'

class Board extends React.Component {
    constructor(props){
        super(props)
    }
    // this.props.puzzle = [NUMBERS]

    createTwoDArray(puzzle){
        let i = 0;
        let j = 0;
        let k = 0;
        const finalArr = [];
        
        while (i < 81) {
            while (j < 9) {
                let row = []
                while (k < 9){
                    row.push(puzzle[i])
                    i += 1;
                    k += 1;
                }
                finalArr.push(row);
                j += 1;
            }
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Board;