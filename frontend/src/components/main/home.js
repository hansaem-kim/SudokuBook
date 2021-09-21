import React from 'react';
import NavBarContainer from './navbar_container';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <NavBarContainer />
            </div>
        );
    }
}

export default Home;