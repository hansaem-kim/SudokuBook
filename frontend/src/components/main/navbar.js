import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/profile'}>Profile</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar">
                <img src={logo} alt="logo" />
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;