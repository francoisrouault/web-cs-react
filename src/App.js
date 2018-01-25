import React, { Component } from 'react';
import csLight from './cs-light.png';
import csDark from './cs-dark.png';
import './App.css';
import Logo from './Logo.js';

const darkColor = '#1b1b1b';
const lightColor = '#ffffff';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isThemeLight: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isThemeLight: !prevState.isThemeLight
    }));
  }

  render() {
    const isThemeLight = this.state.isThemeLight;
    document.body.style.backgroundColor = isThemeLight ? lightColor: darkColor;

    var buttonStyle = {
      background: isThemeLight ? darkColor : lightColor,
    };
    // var buttonClassName = this.state.isThemeLight ? "App-Button-Light" : "App-Button-Dark";

    return (  
      <div>
        <a href="#" className={"App-Button"} style={buttonStyle} onClick={this.handleClick}/>
        <Logo src={this.state.isThemeLight ? csLight : csDark}/>
      </div>
    );
  }
}

export default App;
