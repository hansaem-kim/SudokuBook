import React from 'react';
import {withRouter} from 'react-router-dom'

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _id: this.props.post._id,
            text: this.props.post.text,
            user: this.props.currentUser.id,
            time: this.props.time,
            puzzle: this.props.sudokuId 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTime = this.updateTime.bind(this);
    }

    componentDidMount(){
        this.setState({time: this.props.time});
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({time: this.props.time, puzzle: this.props.sudokuId}, () => 
        this.props.action(this.state)
            .then(this.props.closeModal)
            .then(()=> this.props.updateSudoku(
                {"time": { minutes: this.props.time.minutes, seconds: this.props.time.seconds },
                 "user": this.props.currentUser,
                "id":this.props.sudokuId})
            .then(()=> this.props.history.push('/feed')))
        );
    }

    updateTime(){
        this.setState({time: this.props.time})
    }

    update(field){
        return e=> this.setState({[field]: e.currentTarget.value})
    }

    render(){
        const {currentUser, time} = this.props;
        
        let clockMinutes = null;
        let clockSeconds = null;
        let userTime = null;
        if (time){
            if (time.minutes){
                clockMinutes = time.minutes;
                clockMinutes = (clockMinutes < 10) ? `0${clockMinutes}` : clockMinutes;
            } else {
                clockMinutes = '00';
            }
            if (time.seconds){
                clockSeconds = time.seconds;
                clockSeconds = (clockSeconds < 10) ? `0${clockSeconds}` : clockSeconds;
            }
            
            userTime = time.seconds ? 
                (<div className='time'>
                    <p>Your completion time: {clockMinutes}:{clockSeconds}</p>
                </div>)
                : 
                null;
        }


            return(
            <div className='post-form'>
                <header>
                    <div className='form-type'>
                        <h1>{this.props.formType}</h1>
                        <div className="close-x" onClick={()=> this.props.closeModal()}>
                            <i className="fas fa-times"></i>
                        </div>
                        
                    </div>
                </header>

                <div className='post-form-content'>
                    <form id='post-form-body' onSubmit={this.handleSubmit}>
                        {userTime}
                        
                        <div className='post-textarea-div'>
                            <textarea className='post-textarea' placeholder="How was the game?" value={this.state.text} onChange={this.update("text")}/>
                        </div>
                        
                        <footer>
                            <input type="submit" value="Post" />
                        </footer>
                    </form>
                </div>

                
            </div>
        )
    }
}

export default withRouter(PostForm);