import React from 'react';

const Footer = props => {
    if (!props.loggedIn) return null;

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-links">
                    <a href="https://github.com/hansaem-kim/SudokuBook" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;