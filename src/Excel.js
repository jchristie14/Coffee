import React, { Component } from 'react';
import './Excel.css';

class Excel extends Component {
  constructor(props) {
    super(props);
    this._sort = this._sort.bind(this);
    this.state = {
      data: this.props.data,
      sortby: null,
      descending: false,
    };
  }

  _sort(e) {
    var column = e.target.cellIndex;
    var data = this.state.data.slice();
    var descending = this.state.sortby === column && !this.state.descending;
    data.sort(function(a,b){
      return descending
        ? (a[column] < b[column] ? 1 : -1)
        : (a[column] > b[column] ? 1 : -1);
    });
    this.setState({
      data: data,
      sortby: column,
      descending: descending,
    });
  }

  render() {
    return (
      <div className="Excel">
        <table className="table table-striped">

          <thead onClick={this._sort} >
            <tr>
              {
                this.props.headers.map((title, idx)=>{
                  console.log(this)
                    if (this.state.sortby === idx){title += this.state.descending ? '\u2191' : '\u2193'};
                  return (
                    <th key={idx}>{title  }</th>
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