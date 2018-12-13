import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import City from './assets/city.jpeg';

class App extends Component {
  render() {
    return (
      <div>
        <style jsx global>{`
          body {
            color: white;
            font-family: helvetica;
            background-color: black;
            background-image: url(${City});
            background-size: cover;
            background-position: 0 500px;
            background-repeat: no-repeat;
          }
        `}</style>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
