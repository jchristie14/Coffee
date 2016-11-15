import React, { Component } from 'react';
import './App.css';
import Excel from './Excel';

class App extends Component {
  constructor() {
    super();
    this.headers = ['Name', 'Region', 'Notes', 'Price'];
    this.data=[
      ["Apollo","Ethiopia","We are transfixed by Ethiopian coffees—Ethiopia is the birthplace of coffee, after all. And we are inspired by their floral, citrusy bright notes for the coffees that we use in Apollo.",1575],
      ["Banko Gotiti","Ethiopia","Within the area of Yirgacheffe in Ethiopia, a subregion called Gedeb is making a name for itself. We bought coffee from two farmers in Gedeb this year—Wondimu Aunu and Bedhatu Jibicho—both of whom are growing and processing their own coffee in the small village of Banko Gotiti. Up front, this coffee is all about fruit flavors, ranging from strawberry to dried blueberry, but the finish is all about sweet chocolate notes.",1925],
      ["Baroida","Papua New Guinea",'"Beautiful, unique, and challenging" hardly begin to tell the story of Papua New Guinea. The Colbran family—owners of the Baroida farm for three generations—produce what we consider to be the best coffee in the Pacific. Through impeccable management and attention to detail their coffee shines with savory notes of molasses and spice.',1775],
    ];
  }


  render() {
    return (
      <div className="App">
        <div className="container">
        <h1>Coffee Inventory</h1>

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
