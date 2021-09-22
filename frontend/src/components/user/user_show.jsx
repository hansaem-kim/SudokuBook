import React from 'react';


class UserShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            following: false
        }
        
        this.handleFollow = this.handleFollow.bind(this);
        
        this.props.getFollows(this.props.currentUser.id).then(() => {
            
            
            this.props.follows.forEach(el => {
                if (el.followee == this.props.match.params.userId){
                    this.setState({
                        following: true
                    })
                    console.log("inside change")
                }
            })
            
        })
        
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
           
            if (this.props.match.params.userId == "profile"){
                user = this.props.currentUser;
            }else if (Object.keys(this.props.users).length !== 0){

                for (const property in this.props.users){
                    if (this.props.users[property]._id === this.props.match.params.userId){
                      
                        user = this.props.users[property];
                    }
                }
                
              

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