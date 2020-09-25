import React from "react";
import "./sortedTable.css";
import Table from './Table';
import TableHead from './TableHead';


class SortedTable  extends React.Component {

  state = {
      alphabetical: true,
      sortedEmployees: [],
      employees: []
  }

  componentDidMount() {
    console.log('SortedTable::CDM',this.props.empList.length)
    console.log('SortedTable::CDM',this.props.empList)
      if (this.state.sortedEmployees.length < 1) {
          this.setState({
              sortedEmployees: this.props.empList
          })
      }
  }

  componentDidUpdate(lastProps) {
    console.log('SortedTable::CDU',this.props.empList.length)
    console.log('SortedTable::CDU',this.props.empList)
      if (this.props.empList !== lastProps.empList) {
          this.setState({
              sortedEmployees: this.props.empList
          })
      }
  }

  sortName = () => {
    let sortEmp = [];
    if (this.state.alphabetical) {
        sortEmp = this.props.empList.sort((a, b) => {
            var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        })
    } else {
        sortEmp = this.props.empList.sort((a, b) => {
            var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
            if (nameA > nameB)
                return -1
            if (nameA < nameB)
                return 1
            return 0
        })
    }
    this.setState({
        alphabetical: !this.state.alphabetical,
        sortedEmployees: sortEmp

    })
  }

  render() {
    return (
      <div> 
        <table className="table table-hover">
        <thead className="thead-light">
          <tr>
          <th scope="col">Image</th>
            <th onClick={this.sortName} className="name" scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
         </thead>
        <tbody>  
        {
        (this.state.sortedEmployees.length > 0) &&

        this.state.sortedEmployees.map((emp, index) => (

          <Table
              key={emp.id.value}
              image={emp.picture.thumbnail}
              first={emp.name.first}
              last={emp.name.last}
              title={emp.name.title}
              gender={emp.gender}
              dob={emp.dob.date.split('T')[0]}
              phone={emp.phone}
              email={emp.email}
          />
  ))

        }
 </tbody>
</table>              
      </div>
    );
  }
}

export default SortedTable;
