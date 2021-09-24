import React from 'react';
import PostIndexItem from '../post/post_index_item';
import FriendItem from './friend_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons';


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
      if (items.length === 0){
        let item = <h3>You dont follow anyone</h3>
        items.push(item);
      }
      



      return (
        <div className="profile-page">
          <h1>Welcome to your profile page, {currentUser.username}</h1>
          <div className="posts-friends">
            <div className="posts">
              <h2>Your Posts</h2>
              {posts.map(post => {
                if (post.user == currentUser.id){
                  return <PostIndexItem post={post} currentUser={currentUser}
                  deletePost={deletePost} key={post._id} />
                }
              })}
            </div>
            <div className="right" >
              <div className="purple-part" >
                <h1>Following <FontAwesomeIcon icon={faUserFriends}/></h1>
                <div className="friends">
                  {items}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Profile;