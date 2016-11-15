import React, { Component } from 'react';
import './Excel.css';

class Excel extends Component {
  constructor(props) {
    super(props);
    this._renderSearch = this._renderSearch.bind(this);
    this._renderTable = this._renderTable.bind(this);
    this._renderToolbar = this._renderToolbar.bind(this);
    this._search = this._search.bind(this);
    this._sort = this._sort.bind(this);
    this._showEditor = this._showEditor.bind(this);
    this._save = this._save.bind(this);
    this._toggleSearch = this._toggleSearch.bind(this);
    this.state = {
      data: this.props.data,
      sortby: null,
      descending: false,
      edit: null,
      search: false,
      _preSearchData: null,
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

  _search(e) {
    var needle = e.target.value.toLowerCase();
    if(!needle) {
      this.setState({
        data: this._preSearchData
      });
      return;
    }
    var idx = e.target.dataset.idx;
    var searchdata = this._preSearchData.filter(function(row){
      return row[idx].toString().toLowerCase().indexOf(needle) > -1;
    });
    this.setState({
      data: searchdata
    });
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

  _toggleSearch() {
    if(this.state.search) {
      this.setState({
        data: this._preSearchData,
        search: false,
      });
      this._preSearchData = null;
    } else {
      this._preSearchData = this.state.data;
      this.setState({
        search: true,
      })
    }
  }

  render() {
    return (
      <div>
      {this._renderToolbar()}
      {this._renderTable()}
      </div>
    )
  }

  _renderSearch() {
    if (!this.state.search){
      return null;
    }
    return (
      <tr onChange={this._search} >
        {
          this.props.headers.map(function(_ignore, idx){
           return( <td
              key={idx}
            >
              <input type='text' data-idx={idx} />
            </td>)
          })
        }
      </tr>
    )
  }

  _renderToolbar() {
    return (
      <button
        onClick={this._toggleSearch}
        className="toolbar"
      >
        Search
      </button>
    );
  }

  _renderTable() {
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
            {this._renderSearch()}
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