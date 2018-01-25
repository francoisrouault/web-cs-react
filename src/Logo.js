import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {

    render() {
        return <img src={this.props.src} className="Logo" alt='Logo' />;
    }

}

export default Logo;

