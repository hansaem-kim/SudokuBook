import React from 'react';
import logo from '../../assets/images/logo.png';

class MainPage extends React.Component {
    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.history.push('/app');
        }
    }

    render() {
        return (
            <div className="main-page-background">
                <div className="main-page-content">
                    <img src={logo} alt="logo" />
                    <button onClick={() => this.props.openModal('login')}>Log In</button>
                    <button onClick={() => this.props.openModal('signup')}>Sign Up</button>
                </div>
            </div>
        );
    }
}

export default MainPage;