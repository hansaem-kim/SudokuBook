import React from 'react';

class Tile extends React.Component {
    render() {
        const inp = this.props.value === 0 ? <input type="text" /> : this.props.value;
        return (
            <div>
                {inp}
            </div>
        )
    }
}

export default Tile;