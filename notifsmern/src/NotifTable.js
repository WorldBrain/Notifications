import React from 'react';
import data from './data/data';
// import data from 'https://jsonplaceholder.typicode.com/posts';
import './css/table-style.css';

//var jsons = require ('http://localhost:4001/api/notifications');
//console.log("jsons");

  //console.log(data);

const tableHeaders = Object.keys(data[0]);

const TableHead = () => (
  <tr>
    {tableHeaders.map(label => (
      <th>{label}</th>
    ))}
  </tr>
)
class TableRow extends React.Component {
  render() {
    return (
      <tbody>
        {data.map(row => (
          <tr key={row.title}>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.body}</td>
            <td>{row.date}</td>
            <td>{row.views}</td>
          </tr>
        ))}
      </tbody>
    )
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <table>
          <TableHead />
          <TableRow />
        </table>
      </div>
    );
  }
}

export default Table
