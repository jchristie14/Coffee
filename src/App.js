import React, { Component } from 'react';
import './App.css';
import Excel from './Excel';

class App extends Component {
  constructor() {
    super();
    this.headers = ['Name', 'Region', 'Notes', 'Price'];
    this.data=[
      ["cooname1","Guatemala","full-bodied",1300],
      ["coolname2","Mexico","very strong",1200],
      ["Coolname3","Indonesia","lighter",1100],
    ];
  }


  render() {
    return (
      <div className="App">
        <div className="container">

        <Excel
          headers={this.headers}
          data={this.data}
        />

        </div>

      </div>
    );
  }
}

export default App;
