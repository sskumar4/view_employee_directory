import React from "react";
// import "../index.css";
// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

function Table(props) {
//   return (
 
//   <BootstrapTable data={props.employees} version='4'>
//       <TableHeaderColumn  isKey dataField='employees.email'>Email</TableHeaderColumn>
//       <TableHeaderColumn dataField='cell'>Cell</TableHeaderColumn>
//       <TableHeaderColumn dataField='gender'>Gender</TableHeaderColumn>
//       <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
//       <TableHeaderColumn dataField='dob.age'>DOB</TableHeaderColumn>
//   </BootstrapTable>,
//   document.getElementById('basic')
// );

return (


    <tr>
      <th scope="row">{<img alt={props.last} src={props.image}></img>}</th>
      <td> {props.first} {props.last}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>

);
  }

//   <div className="card">
//   <div><img alt={props.last} src={props.image}></img></div>
//   <div>{props.title} {props.first} {props.last} </div>
//   <div>{props.gender}</div>
//   <div>{props.age}</div>
//   <div>{props.phone}</div>
//   <div>{props.email}</div>
// </div>
export default Table;


