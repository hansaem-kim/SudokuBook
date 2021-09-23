import React from 'react';
import PostIndexItem from '../post/post_index_item';
import FriendItem from './friend_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.props.fetchFollows(this.props.currentUser.id);
    }

    componentDidMount(){
      this.props.fetchPosts();
    }
    
    render() {
      const {posts, deletePost, currentUser, friends, users} = this.props;



      let items = [];
      friends.map(friend => {
        
        users.map(user => {
          if (friend.followee == user._id){
            let item =  <FriendItem currentUser={currentUser} key={user._id} user={user} />
            items.push(item);
          }
        })
        
      })

      



      return (
        <div className="profile-page">
          <h1>Your profile page</h1>
          <div className="posts-friends">
            <div className="posts">
              {posts.map(post => {
                if (post.user == currentUser.id){
                  return <PostIndexItem post={post} currentUser={currentUser}
                  deletePost={deletePost} key={post._id} />
                }
              })}
            </div>
            <div className="friends">
              {items}
            </div>
          </div>
        </div>
      );
    }
}

export default Profile;