import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person />
      </div>
       
    );
    //Person is the way how I can call my COMPONENT
      /*This is the same to DIV that I can see above of this code, use a className for being JavaScript
      Besides of that de first attibute of the method is the HTML stuf that I' using, secondly the second one is the 
      properties, and third one is want I want to put in */

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this React App work??'))
  }
}

export default App;
