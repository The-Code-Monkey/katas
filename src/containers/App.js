import React, {Component} from 'react';
import { connect } from 'react-redux';
import List from '../components/List';

import data from '../contants/data.json'

import './App.scss';

class App extends Component {
  state = {
    filteredData: data,
    data
  };
  
  changeFilter = (event, data) => {
    let newFilteredData = [];
  
    if (event === null) {
      newFilteredData = data;
    } else {
    
      data.forEach(item => {
        if (item.facilities.includes(event)) {
          newFilteredData.push(item);
        }
      });
    
    }
    
    this.setState({
      filteredData: newFilteredData
    })
  };
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <List filteredData={this.state.filteredData.slice(0,2)} data={data} updateList={(event, data) => this.changeFilter(event, data)} />
        </div>
      </div>
    );
  }
}

export default App;
