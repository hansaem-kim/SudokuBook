import React from 'react';
import PostIndexItem from './post_index_item';
// import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        const {posts, deletePost, currentUser} = this.props;
        return(
            <div>
                {posts.map(post=>(
                    <PostIndexItem post={post} currentUser={currentUser} deletePost={deletePost} key={post._id}/>
                    ))
                }
            </div>
        )
    }
}

export default PostIndex;