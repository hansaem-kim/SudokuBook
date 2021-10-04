import React from "react";
import PostIndexContainer from "../post/post_index_container";

class Feed extends React.Component{
    render(){
        return(
            <div className='feed-div'>
                <h1>Hello, {this.props.currentUser}!</h1>
                <div className='post-div'>
                    <div className='create-post-div border-gradient border-gradient-purple'>
                        <button onClick={()=>this.props.openModal('createPost')} className="start-post-btn">write a post</button>
                    </div>
                    
                </div>
                <PostIndexContainer />
                <div className='tip-div'>
                    <header>
                        <h2>Need Help?</h2>
                    </header>
                    
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.sudokuessentials.com/sudoku_rules.html">1. Basic Sudoku Rules</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.sudokuessentials.com/sudoku_tips.html">2. Basic Sudoku Tip</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.sudokuessentials.com/x-wing.html">3. Sudoku X-Wing</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.sudokuessentials.com/Sudoku-XY-Wing.html">4. Sudoku XY-Wing</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.sudokuessentials.com/Sudoku_Swordfish.html">5. Swordfish Pattern</a></li>

                    </ul>
                </div>
            </div>
        )

    }
}

export default Feed;