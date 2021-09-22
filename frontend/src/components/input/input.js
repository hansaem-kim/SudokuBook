import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
          return (
            <div className="input-keys" >
                <div className="number-keys">
                    <button className="number-keys-1">1</button>
                    <button className="number-keys-2">2</button>
                    <button className="number-keys-3">3</button>
                    <button className="number-keys-4">4</button>
                    <button className="number-keys-5">5</button>
                    <button className="number-keys-6">6</button>
                    <button className="number-keys-7">7</button>
                    <button className="number-keys-8">8</button>
                    <button className="number-keys-9">9</button>
                </div>
            </div>
          );
    }
}

export default Input;