import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import SearchContainer from '../search/search_container';
import {withRouter} from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.logoutUser = this.logoutUser.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // handleClick(e){
    //     e.preventDefault();
    //     this.props.fetchFollowers(this.props.currentUser.id);
    //     this.props.fetchFollows(this.props.currentUser.id);
    //     this.props.fetchUserFollows(this.props.currentUser.id);
    //     this.props.history.push(`/${this.props.currentUser.id}`);
    // }

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
                    <Link className="navbar-user-link" to={`/${this.props.currentUser.id}`}  >Profile</Link>
                    <Link className="navbar-user-link" to={'/about'}>About</Link>
                    
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);