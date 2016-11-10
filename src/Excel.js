import React, { Component } from 'react';
import './Excel.css';

class Excel extends Component {
  constructor(props) {
    super(props);
    this._sort = this._sort.bind(this);
    this._showEditor = this._showEditor.bind(this);
    this._save = this._save.bind(this);
    this.state = {
      data: this.props.data,
      sortby: null,
      descending: false,
      edit: null,
    };
  }

  _save(e){
    e.preventDefault();
    var input = e.target.firstChild;
    var data = this.state.data.slice();
    data[this.state.edit.row][this.state.edit.cell]=input.value;
    this.setState({
      edit: null,
      data: data,
    })
  }

  _showEditor(e){
    this.setState({edit: {
      row: parseInt(e.target.dataset.row, 10),
      cell: e.target.cellIndex,
    }});
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
                  if (this.state.sortby === idx){title += this.state.descending ? '\u2191' : '\u2193'};
                  return (
                    <th key={idx}>{title  }</th>
                  )
                })
              }
            </tr>
          </thead>

          <tbody onDoubleClick={this._showEditor}>
            {this.state.data.map((row, rowIndex)=>{
              return(
                <tr key={rowIndex}>
                 {row.map((cell, cellIndex)=>{
                    var content = cell;
                    var edit = this.state.edit;
                    if (edit && edit.row === rowIndex && edit.cell === cellIndex){
                      content =
                        <form onSubmit={this._save}>
                          <textarea type='text' rows="5" defaultValue={content} ></textarea>
                          <input type="submit"/>                       
                        </form>
                    }
                    return(
                      <td 
                        key={cellIndex}
                        data-row={rowIndex}
                      >{content}</td>)})}
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