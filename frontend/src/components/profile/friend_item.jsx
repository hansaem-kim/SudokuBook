import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow } from '../../actions/follow_actions';

class FriendItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            following: true
        }

        

        this.handleFollow = this.handleFollow.bind(this);
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
        
    }

    render(){
        const { user } = this.props;
        return(
            <div className="pf-user">
                <h2>{user.username}</h2>
                <button className={this.state.following ? " follow-button unfollow" : "follow-button follow"} onClick={this.handleFollow}>{this.state.following ? "UnFollow" : "Follow"}</button>
            </div>
        )
    }
}

const mSTP = state => ({
    follows: state.session.userF
})

const mDTP = dispatch => ({
    follow: id => dispatch(follow(id)),
    unfollow: id => dispatch(unfollow(id))
});

export default connect(mSTP, mDTP)(FriendItem);