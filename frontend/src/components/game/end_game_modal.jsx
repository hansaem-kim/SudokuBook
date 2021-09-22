import React, { Component } from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';

export default class EndGameModal extends Component {
    render() {
        return (
            <div>
                <h1>Good job! Do you want to post your score?</h1>
                <CreatePostFormContainer />
            </div>
        )
    }
}
