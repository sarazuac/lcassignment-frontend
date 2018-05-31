import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  PeopleContainer from './components/PeopleContainer';
import  SearchContainer from './components/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">People List</h1>
        </header>
        <SearchContainer/>
        <PeopleContainer/>
      </div>
    );
  }
}

export default App;
