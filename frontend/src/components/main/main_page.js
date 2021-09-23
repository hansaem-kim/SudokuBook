import React from 'react';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

class MainPage extends React.Component {
    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.history.push('/home');
        }
    }

    render() {
        return (
            <div className="main-page-background">
                <div className="main-page-content">
                    <img src={logo} alt="logo" />
                    <button onClick={() => this.props.openModal('login')}>Log In</button>
                    <button onClick={() => this.props.openModal('signup')}>Sign Up</button>
                    <div className='question-mark'>
                        <FontAwesomeIcon icon={faQuestionCircle} onClick={() => this.props.openModal('instructions')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;