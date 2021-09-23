import React from 'react';

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        const {updateBoard, coordinates} = this.props;
        updateBoard(coordinates, e.currentTarget.value);
    }

    render() {
        const inp = this.props.inputTile ? 
            <input type="number" max="9" min="0" step="1" onChange={this.handleChange}/> 
                : 
            <div className='prefilled'>{this.props.value}</div>;
        
        return (
            <div className='tile'>
                {inp}
            </div>
        )
    }
}

export default Tile;