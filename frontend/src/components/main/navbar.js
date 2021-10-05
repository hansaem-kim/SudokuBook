import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        if (!this.props.loggedIn) return null;
        return (
            <div className="navbar">
                <Link className="navbar-user-link" to={'/home'}>
                    <img src={logo} alt="logo" />
                </Link>
                <SearchContainer />
                <div className="navbar-user">
                    <Link className="navbar-user-link to-feed" to={'/feed'}>Feed</ Link> 
                    {/* {console.log(`cu ${this.props.currentUser}`)} */}
                    <Link className="navbar-user-link" to={this.props.currentUser ? `/${this.props.currentUser.id}` : '/tt' }>Profile</Link>
                    <Link className="navbar-user-link" to={'/about'}>About</Link>
                    
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            </div>
        );
    }
}

export default NavBar;