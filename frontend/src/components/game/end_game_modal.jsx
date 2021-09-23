import React, { Component } from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';

export default class EndGameModal extends Component {
    render() {
        return (
            <div className='end-game-modal-div'>
                <h1>Success!</h1>
                <h2>Share you completion time!</h2>
                <CreatePostFormContainer />
            </div>
        )
    }
}
