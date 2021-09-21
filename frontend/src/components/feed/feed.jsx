import React from "react";
import PostIndexContainer from "../post/post_index_container";

class Feed extends React.Component{
    render(){
        return(
            <div className='feed-div'>
                <h1>Hello {this.props.currentUser}</h1>
                <div className='post-div'>
                    <div className='top-div'>
                        <button onClick={()=>this.props.openModal('createPost')} className="start-post-btn">Write a post</button>
                    </div>
                </div>
                <PostIndexContainer />
            </div>
        )

    }
}

export default Feed;