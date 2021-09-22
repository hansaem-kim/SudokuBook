import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : [],
        }

    }

    componentDidUpdate() {
        console.log(this.state);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }
        
    update() {
        return e => {
            this.setState({ posts: this.props.posts.filter(post => {
                return post.text.toLowerCase().search(e.currentTarget.value.toLowerCase()) != -1
            })})
        }
    }
    
    searchResult() {
        if (this.state.posts.length) {
            return (
                <h1>{this.state.posts.map(post => {
                    console.log(post.text)
                })}</h1>
            )    
        }
    }
    
    render() {
        return (
            <div className="search-bar">
                <input type="text" value={this.state.value} onChange={this.update()} placeholder="Search" />
                {this.searchResult()}
                <input type="submit" value="Find" />
            </div>
        );
    }
}

export default Search;