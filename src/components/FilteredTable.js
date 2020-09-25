import React from "react";
import "./filteredTable.css";
import SortedTable from './SortedTable';

class FilteredTable extends React.Component {

    state = {
        searchEmp: "",
        filteredEmployees: []
    };

    componentDidMount() {
        console.log('FilteredTable::length',this.props.employees.length)
        console.log('FilteredTable::employees',this.props.employees)
        if (this.state.filteredEmployees.length < 1) {
            this.setState({
                filteredEmployees: this.props.employees
            })
        }
    }


    handleInputChange = event => {
        this.setState({
            searchEmp: event.target.value
        });
        let userInp = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email + item.cell;
            return values.indexOf(userInp) !== -1;

        });

        this.setState({
            filteredEmployees: filteredList

        });
    }

    render() {
      return (
        <div>
          <form className="form">
            <input
              value={this.state.searchEmp}
              name="searchEmp"
              onChange={event => this.handleInputChange(event)}
              type="text"
              placeholder="Search Employee"
            />
          </form>
            { 
                // console.log('length',this.state.filteredEmployees.length);
                // console.log('employees',this.state.filteredEmployees) 
            this.state.filteredEmployees.length > 0 &&
                <SortedTable empList={this.state.filteredEmployees} />
            }
        </div>

      );
    }
}


export default FilteredTable;