import React, { Component } from 'react'

export default class Instructions extends Component {
    render() {
        return (
            <div className='instructions-container'>
                <span onClick={this.props.closeModal} className="close-x">X</span>
                <h1>Welcome to SudokuBook!</h1>
                <p>SudokuBook is a social networking app centered on playing <a href="https://en.wikipedia.org/wiki/Sudoku" target="_blank">sudoku</a>. Users can play sudoku games, submit their completion times, view leaderboards, challenge friends to games, and scroll through a live social feed of other's completion times and challenges. Here's how to get started: </p>
                <ul>
                    <li>Create an account (or log in)</li>
                    <li>Play a game by accepting a challenge from the feed or playing a random puzzle</li>
                    <li>Submit your completion time with a message, and post it to your feed</li>
                    <li>Add friends, send challenges, and sudoku on!</li>
                </ul>
            </div>
        )
    }
}
