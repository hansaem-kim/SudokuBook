import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gameBoard: this.props.twoD,
            finished: false,
            correct: false
        }
        this.inputTiles = []
        this.renderRow = this.renderRow.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderRow(twoDArray){
        return twoDArray.map((row, i) => {
            return (
                <div className='row' key={`row-${i}`}>
                    {this.renderTiles(row, i)}
                </div>
            )
        })
    }

    renderTiles(row, i){
        return row.map((ele, j) => {
            if (ele === 0) {
                this.inputTiles.push([i,j])
            }
            let inputTileBoolean = false;
            this.inputTiles.forEach(subArr => {
                if (JSON.stringify(subArr) === JSON.stringify([i, j])){
                    inputTileBoolean = true;
                }
            })

            return (
                <Tile
                    value={ele}
                    coordinates={[i, j]}
                    key={[i, j]}
                    updateBoard={this.updateBoard}
                    inputTile={inputTileBoolean}
                />
            )
        })
    }

    updateBoard(coordinates, value){
        let oldBoard = Object.assign([], this.state.gameBoard)
        this.setState({ 
            gameBoard: Object.assign(
                [], 
                oldBoard, 
                oldBoard[coordinates[0]][coordinates[1]] = parseInt(value)
            ) 
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.receiveAnswer(this.state.gameBoard);
        const {answer} = this.props;
        const userAnswer = this.state.gameBoard.flat()
        const correct = (JSON.stringify(answer) === JSON.stringify(userAnswer))
        this.setState({finished: true})
        this.setState({correct: correct})
    }

    render() {
        const gameBoard = this.renderRow(this.props.twoD);
        const endText = this.state.correct ? 
            <p>'Perfect!'</p> 
                : 
            <div><p>'Not quite..'</p><button onClick={this.handleSubmit}>Resubmit</button></div>
        const endButton = !this.state.finished ? 
            <button onClick={this.handleSubmit}>Submit</button>
                :
            <div>{endText}</div>;

        return (
            <div className='game-container'>
                <div className='board'>
                    {gameBoard}
                </div>
                {endButton}
            </div>
        )
    }
}

export default Board;