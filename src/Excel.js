import React, { Component } from 'react';
import './Excel.css';

class Excel extends Component {
  render() {
    return (
      <div className="Excel">
        <table className="table table-striped">

          <thead>
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
            {this.props.data.map(function(row, rowIndex){
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

export default Excel;