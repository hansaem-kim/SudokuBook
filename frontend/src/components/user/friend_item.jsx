import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow } from '../../actions/follow_actions';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { getFollows, getFollowers, getUserFollows } from '../../actions/follow_actions';

class FriendItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            following: false
        }

        

        this.handleFollow = this.handleFollow.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
       if(this.props.follows){

           this.props.follows.forEach(el => {
               if (el.followee == this.props.user._id){
                   this.setState({
                       following: true
                   })
                   
               }
           })
       }
         
    }

    handleFollow(e){
        e.preventDefault();
        if (this.state.following){
            this.props.unfollow(this.props.user._id).then(() => this.setState({
                following: !this.state.following
            }))
        }else{
            this.props.follow(this.props.user._id).then(() => this.setState({
                following: !this.state.following
            }))
        }
        this.props.fetchUserFollows(this.props.currentUser.id);
    }

    // handleClick(e){
    //     e.preventDefault();

    //     this.props.fetchFollowers(this.props.user._id);
    //     this.props.fetchFollows(this.props.user._id);
    //     this.props.fetchUserFollows(this.props.currentUser.id);
        
    //     this.props.history.push(`/${this.props.user._id}`)
    // }

    render(){
        const { user, currentUser } = this.props;
        return(
            <div className="pf-user">
                {/* <button className="user-link" to={`/${user._id}`}>{user.username}</button> */}
                <Link className="user-link" to={`/${this.props.user._id}`} >{user.username}</Link>
                { 
                    this.props.currentUser.id !== this.props.user._id ?
                    <button 
                        className={this.state.following ? " follow-button unfollow" : "follow-button follow"} 
                        onClick={this.handleFollow}> 
                        {this.state.following ? "UnFollow" : "Follow"}
                    </button>
                    :
                    ""
                    
                }
            </div>
        )
    }
}

const mSTP = state => ({
    follows: state.session.userFriends,
    
})

const mDTP = dispatch => ({
    follow: id => dispatch(follow(id)),
    unfollow: id => dispatch(unfollow(id)),
    fetchFollowers: id => dispatch(getFollowers(id)),
    fetchFollows: id => dispatch(getFollows(id)),
    fetchUserFollows: id => dispatch(getUserFollows(id)),
});

export default connect(mSTP, mDTP)(withRouter(FriendItem));