import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/');
        this.props.logout();
    }
    render() {
        return (
        <div>
            <p>If you see this page, it means you are successfully logged in</p>
            <button onClick={this.handleClick}>Log Out</button>
        </div>
        );
    }
}

export default Home;