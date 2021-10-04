import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Footer = props => {
    if (!props.loggedIn) return null;

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-links">
                    <FontAwesomeIcon icon={faQuestionCircle} onClick={() => props.openModal('instructions')}/>

                    <a href="https://github.com/hansaem-kim/SudokuBook" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;