import React from 'react';
import PostIndexItem from '../post/post_index_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
      this.props.fetchPosts();
    }
    
    render() {
      const {posts, deletePost, currentUser} = this.props;
          return (
            <div>
              <h2>{this.props.currentUser.username}'s profile</h2>
              <div>
                {posts.map(post => {
                  if (post.user == currentUser.id){
                    return <PostIndexItem post={post} currentUser={currentUser}
                    deletePost={deletePost} key={post._id} />
                  }
                })}
              </div>
            </div>
          );
    }
}

export default Profile;