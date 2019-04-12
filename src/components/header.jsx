import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <ul className="nav">
                    <li><a href="#home">Heyyo there!</a></li>
                </ul>
            </div>
        );
    }
}


export default Header;
export {Header};