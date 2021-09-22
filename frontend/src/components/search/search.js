import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <input type="submit" value="Find" />
            </div>
        );
    }
}

export default Search;