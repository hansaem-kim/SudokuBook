import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _id: this.props.post._id,
            text: this.props.post.text,
            user: this.props.currentUser.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.action(this.state).then(this.props.closeModal);
    }

    update(field){
        return e=> this.setState({[field]: e.currentTarget.value})
    }

    render(){
        const {currentUser} = this.props;
        return(
            <div className='post-form'>
                <header>
                    <div className='form-type'>
                        <h1>{this.props.formType}</h1>
                        <div className='close-btn' onClick={()=> this.props.closeModal()}>
                            <i className="fas fa-times"></i>
                        </div>
                        
                    </div>
                </header>

                <div className='post-form-content'>
                    <form id='post-form-body' onSubmit={this.handleSubmit}>
                        <div className='post-textarea-div'>
                            <textarea className='post-textarea' placeholder="How was the game?" value={this.state.text} onChange={this.update("text")}/>
                        </div>

                        <footer>
                            <button className='post-submit-btn'>Post</button>
                        </footer>
                    </form>
                </div>

                
            </div>
        )
    }
}

export default PostForm;