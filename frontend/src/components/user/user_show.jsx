import React from 'react';
import { follow, unfollow } from '../../util/follow_api_util'

class UserShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            following: false
        }
        this.props.fetchUser(this.props.match.params.userId)
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(e){
        e.preventDefault();

        if (this.state.following){
            follow(this.props.match.params.userId)
        }else{
            unfollow(this.props.match.params.userId)
        }
        this.setState({
            following: !this.state.following
        })
    }

    render(){
        let user = "";
        let button = null;

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


        
        console.log(user)
        return (
            <div>
                <h1>{user.username}</h1>
                {button}
            </div>
        )
    }
}

export default UserShow;