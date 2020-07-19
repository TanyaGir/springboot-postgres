import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentsApp from './component/StudentsApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <StudentsApp />
      </div>
    );
  }
}
export default App;
