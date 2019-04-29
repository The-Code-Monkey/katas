import React, {Component} from 'react';
import Select from 'react-select';
import { Label } from 'reactstrap';

import ListItem from '../ListItem';

class List extends Component {
  state = {
    selectedOption: null,
    options: []
  };
  
  componentDidMount() {
    this.getOptions()
  }
  
  handleChange = (event) => {
    this.setState({
      selectedOption: [event]
    });
    
    this.props.updateList(event, this.props.data)
  };
  
  getOptions = () => {
    const options = [];
    
    this.props.data.forEach(item => {
      item.facilities.forEach(facility => {
        options.push(facility);
      })
    });
    
    this.setState({
      options: Array.from(new Set(options))
    })
  };
  
  render() {
    return (
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-10">
          <div className="row d-flex justify-content-end">
            <div className="col-6 mb-3">
              <Label>Filter List</Label>
              <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={this.state.options}
                isClearable
                getOptionLabel={(item) => item}
                getOptionValue={(item) => item}
              />
            </div>
          </div>
        </div>
        {this.props.filteredData.map((item, index) => (
          <ListItem data={item} key={index} />
        ))}
      </div>
    );
  }
}

export default List;
