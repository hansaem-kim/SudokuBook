import React from 'react';
import { follow, unfollow, fetchFollows } from '../../util/follow_api_util';

class UserShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            following: false,
            fellow_followers: {}
        }
        this.props.fetchUser(this.props.match.params.userId)
        this.handleFollow = this.handleFollow.bind(this);
        this.follows = fetchFollows(this.props.currentUser)
            .then(posts => {
                this.setState({ fellow_followers: posts }
                )})
        
    }

    handleFollow(e){
        e.preventDefault();
        if (this.state.following){
            unfollow(this.props.match.params.userId).then(() => this.setState({
                following: !this.state.following
            }))
        }else{
            follow(this.props.match.params.userId).then(() => this.setState({
                following: !this.state.following
            }))
        }
        
    }

    render(){
        let user = "";
        let button = null;
        console.log(this.state.fellow_followers);

        if (this.props.currentUser){
            
            if (this.props.match.params.userId == "profile"){
                user = this.props.currentUser;
            }else if (this.props.users[this.props.match.params.userId]){
                user = this.props.users[this.props.match.params.userId];
                button = <button 
                    onClick={this.handleFollow} >{this.state.following ? "UnFollow" : "Follow"}
                </button>;
            }
        }


        
        
        return (
            <div>
                <h1>{user.username}</h1>
                {button}
            </div>
        )
    }
}

export default UserShow;