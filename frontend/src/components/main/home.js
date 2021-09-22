import React from 'react';
import Input from '../input/input'
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
                <p>home</p>
                <Input />
            </div>
        );
    }
}

export default Home;