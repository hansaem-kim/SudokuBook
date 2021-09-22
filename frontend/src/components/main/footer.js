import React from 'react';

const Footer = props => {
    if (!props.loggedIn) return null;

    return (
        <div className="footer">
            <div className="footer-content">
                <p>SudokuBook</p>
            </div>
        </div>
    );
}

export default Footer;