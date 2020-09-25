import React from 'react';
import './App.css';
import axios from "axios";
import Hero from './components/Hero';
import FilteredTable from './components/FilteredTable';
import API from "./utils/API";

class App extends React.Component {

  state = {
    employees: [],
  };

  componentDidMount() {
    API.search()
      .then(res => {this.setState({ employees: res.data.results });
    console.log('res', res)})
      .catch(err => console.log(err));
}

  render() {
    console.log('length',this.state.employees.length)
        console.log('employees',this.state.employees)
    return (
      <div className="App">
        <Hero />
        {this.state.employees.length > 0 &&
        
        <FilteredTable employees={this.state.employees}/>
  }
      </div>
    );
  }
}

export default App;
