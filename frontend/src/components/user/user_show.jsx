import React from 'react';
import PostIndexItem from '../post/post_index_item';
import FriendItem from './friend_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons';

class UserShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            following: false,
            profile: false
        }
        
        this.handleFollow = this.handleFollow.bind(this);
        
        this.props.fetchUserFollows(this.props.currentUser.id).then(() => {
            
            this.props.follows.forEach(el => {
                if (el.followee == this.props.match.params.userId){
                    this.setState({
                        following: true
                    })
                    
                }
            })
            
        })

        this.props.fetchFollowers(this.props.match.params.userId);
        this.props.fetchFollows(this.props.match.params.userId);
        this.props.fetchUserFollows(this.props.currentUser.id);
        
        if (this.props.currentUser && this.props.match.params.userId && (this.props.currentUser.id === this.props.match.params.userId)){
            this.setState({
                profile: true
            })
        }
    }


    componentDidMount(){
        this.props.fetchPosts();
    }
    

    handleFollow(e){
        e.preventDefault();
        if (this.state.following){
            this.props.unfollow(this.props.match.params.userId).then(() => this.setState({
                following: !this.state.following
            }))
        }else{
            this.props.follow(this.props.match.params.userId).then(() => this.setState({
                following: !this.state.following
            }))
        }
        
    }

    render(){
        let user = "";
        let button = null;


        if (this.props.currentUser){
           
            if (Object.keys(this.props.users).length !== 0){

                for (const property in this.props.users){
                    if (this.props.users[property]._id === this.props.match.params.userId){
                      
                        user = this.props.users[property];
                    }
                }
                
                

                button = <button 
                    onClick={this.handleFollow} className={this.state.following ? " follow-button unfollow" : "follow-button follow"} >{this.state.following ? "UnFollow" : "Follow"}
                </button>;
            }
        }

        const {posts, currentUser, deletePost, follows, followers, userFollows, users } = this.props;


        let followsArr = [];
        if (follows && typeof user === "object"){
            follows.map(follow => {
                users.map(user => {
                if (follow.followee == user._id){
                    let item =  <FriendItem currentUser={currentUser} key={user._id} user={user} />;
                    followsArr.push(item);
                }
                })
            })
        }

        let followersArr = [];

        if (followers && typeof user === "object"){

            followers.map(friend => {
                users.map(user => {
                    if (friend.follower == user._id){
                        let item =  <FriendItem currentUser={currentUser} key={`f ${user._id}`} user={user} />;
                        followersArr.push(item);
                    }
                })
                
            })
        }
            

       
        
        return (
            <div className="profile-page">
                {
                    this.props.profile ? 
                    <div>
                        <h1>Welcome to your profile page, {currentUser.firstName} {currentUser.lastName}</h1>
                        <h4>People can find you by searching your username: {currentUser.username}</h4>
                    </div>
                    :
                    <h1>Welcome to {user.username}'s page</h1>
                }
                <div className="posts-friends">
                    <div className="right" >
                        <div className="purple-part" >
                            <h1>Followers {followersArr.length} <FontAwesomeIcon icon={faUserFriends}/></h1>
                            <div className="friends">
                                {followersArr.length ? followersArr : <h3 key="2" >You dont follow anyone</h3>}
                            </div>
                        </div>
                    </div>
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
                            <h1>Following {followsArr.length} <FontAwesomeIcon icon={faUserFriends}/></h1>
                            <div className="friends">
                                {followsArr.length ? followsArr : <h3 key="2" >You dont follow anyone</h3>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;