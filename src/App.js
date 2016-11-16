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
      ["Big Trouble","Nicaragua","Big Trouble offers nutty, caramel flavors people know and love, which may seem easy—and our goal is to make it easy to enjoy in any brewer—but it's actually one of the most challenging for us, because clean, sweet, low-acidity coffees from small-scale farms can be elusive.",1525],
      ["Buziraguhindwa","Burundi","The tiny village of Buziraguhindwa has built quite a reputation for producing high-quality coffee. The owner of the town's washing station, Ramadhan Salum, has an infectious drive and energy to innovate and create unique, small selections that are some of the best in the country. Through focus and attention to detail, Ramadhan and his staff created this elegant coffee with notes of tangerine, black tea, and fig.",1675],
      ["El Moral","Colombia","The Nariño region of Colombia is home to a wide array of quality coffees. Natural factors like high altitude, a temperate climate, and volcanic soil contribute to distinctive flavor profiles. Moreover, small farmers like Francisco Gomez of El Moral are carefully processing their coffees, resulting in a clean, concentrated sweetness. Notes of red grape, dark chocolate, almond.",1825],
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
