import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClickClear = this.handleClickClear.bind(this);
        this.state = {
            value : '',
            users : []
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleClickClear () {
        this.setState({value: ''});
    }

    update() {
        return e => {
            this.setState({
                value: e.currentTarget.value,
                users: this.props.users.filter(user => (
                    user.username.toLowerCase().search(e.currentTarget.value.toLowerCase()) != -1)
                )
            });
        };
    }
    
    searchResult() {
        if (this.state.users.length && this.state.value) {
            return (
                <div className="search-result">
                    <ul>
                        {this.state.users.slice(0,5).map(user => (
                            <Link className="search-user-link" key={user._id} to={`/${user._id}`} onClick={this.handleClickClear}>
                                <li>{user.username}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )    
        } else {
            return null;
        }
    }
    
    render() {
        return (
            <div className="search-bar">
                <input type="text" value={this.state.value} onChange={this.update()} placeholder="Search" />
                {this.searchResult()}
            </div>
        );
    }
}

export default Search;