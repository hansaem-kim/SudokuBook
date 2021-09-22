import React from 'react';
import { connect } from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from 'react-router-dom';


class PostIndexItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {show: false };
        this.dropShow = this.dropShow.bind(this); 
        this.dropHide = this.dropHide.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.post.user);
    }

    dropShow() {
        this.setState({show: true})
    }

    dropHide(){
        this.setState({show: false})
    }

    


    render(){
        let username;
        let user;

        if (this.props.users[this.props.post.user]){
            user = this.props.users[this.props.post.user];
            username = this.props.users[this.props.post.user].username;
        } else {
            user= null;
            username = null;
        }
        const editButton = (
            <div className='edit-btn' onClick={() => {return this.props.openModal('editPost', this.props.post._id)}} >
            <i className="far fa-edit"></i> Edit Post</div>)

        const deleteButton = (
            <div className='delete-btn' onClick={()=> this.props.deletePost(this.props.post._id)}>
            <i className="far fa-trash-alt"></i> Delete Post</div>
        )

        let dropdown;
        if (this.props.currentUser.id == this.props.post.user){
            dropdown = (
                <button className='dropdown' onFocus={this.dropShow} onBlur={this.dropHide}>
                    <i className="fas fa-ellipsis-h"></i>
                    <ul onClick={e => e.stopPropagation()} className={this.state.show ? "show-dropdown" : "hide-dropdown"}>
                        <div>
                            {editButton}
                        </div>
                        <div>
                            {deleteButton}
                        </div>
                    </ul>
                </button>
            );
        }else{
            dropdown = null;
        }
        let userTime=null;
        if (this.props.post.time){
            const {time} = this.props.post;
            let clockMinutes = null;
            let clockSeconds = null;
            if (time.minutes) {
                clockMinutes = time.minutes;
                clockMinutes = (clockMinutes < 10) ? `0${clockMinutes}` : clockMinutes;
            } else {
                clockMinutes = '00';
            }
            if (time.seconds) {
                clockSeconds = time.seconds;
                clockSeconds = (clockSeconds < 10) ? `0${clockSeconds}` : clockSeconds;
            }
            userTime = time.seconds ? 
                (<div className='time'>
                    <p>{username}'s completion time: {clockMinutes}:{clockSeconds}</p>
                </div>)
                :
                null;
        }

        let playSudokuButton = null;
        if (this.props.post.puzzle) {
            playSudokuButton = <button onClick={()=>this.props.history.push(`/sudokus/${this.props.post.puzzle}`)}  > Beat this time! </button>
        }


        return(
            <div className='created-post-div'>
                <header className='created-post-header'>
                        <div className="author-name-div">
                            {username}
                        </div>
                        {dropdown}

                </header>
                
                <div className="created-post-body"> 
                    <p>{this.props.post.text}</p>
                    {userTime}
                    {playSudokuButton}
                </div>

            </div>
        )
    }


}

const mSTP = (state, ownProps) => {
    return({
    currentUser: state.session.user,
    users: state.entities.users

})};

const mDTP = (dispatch) => ({
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mSTP, mDTP)(withRouter(PostIndexItem));