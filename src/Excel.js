import React, { Component } from 'react';
import './Excel.css';

class Excel extends Component {
  constructor(props) {
    super(props);
    this._sort = this._sort.bind(this);
    this.state = {
      data: this.props.data
    };
  }

  _sort(e) {
    var column = e.target.cellIndex;
    var data = this.state.data.slice();
    data.sort(function(a,b){
      return a[column] > b[column] ? 1 : -1;
    });
    this.setState({
      data: data,
    });
  }

  render() {
    return (
      <div className="Excel">
        <table className="table table-striped">

          <thead onClick={this._sort} >
            <tr>
              {
                this.props.headers.map(function(title, idx){
                  return (
                    <th key={idx}>{title}</th>
                  )
                })
              }
            </tr>
          </thead>

          <tbody>
            {this.state.data.map(function(row, rowIndex){
              return(
                <tr key={rowIndex}>
                 {row.map(function(cell, cellIndex){
                    return(<td key={cellIndex}>{cell}</td>)})}
                </tr>
              )
            })
          }
              
            

          </tbody>
        </table>
      </div>
    );
  }
}

Excel.propTypes = {
  header: React.PropTypes.arrayOf(React.PropTypes.string),
  data: React.PropTypes.array,
};

export default Excel;