import React from "react";
// import "../index.css";
import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

function Table(props) {
  return (
  <BootstrapTable data={props.employees} version='4'>
      <TableHeaderColumn isKey dataField='id'>Image</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
      <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
      <TableHeaderColumn dataField='dob'>DOB</TableHeaderColumn>
  </BootstrapTable>,
  document.getElementById('basic')
);
  }


export default Table;


