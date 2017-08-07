import React from 'react';
// import NotifForm from './NotifForm'
import data from './data/notifdata';
import './css/table-style.css';

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
