import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { PropTypes } from 'react'

class SearchContainer extends Component {

constructor(props){
    super(props);
    this.state = {
        input:''
    };

}

handleFilter(e) {
    //console.log('this.props', this.props.searchFilter) 
    this.props.searchFilter(e.target.value);
    this.setState({
        input: e.target.value
    }//, () =>console.log('filter2', this.state.input) 
);
    
}

componentDidMount(){
    // axios.get('http://localhost:3001/api/v1/people')
    // .then(response => {
    //   console.log(response)
    //   this.setState({people: response.data.data})
    // })
    // .catch(error => console.log(error))
}


  render() {
    return (
        <div>
        <input className="searchbar"
         onChange={this.handleFilter.bind(this)}
          type="text" 
          value={this.state.input} 
          placeholder="Type text to filter"/>
      </div>
    )
  }
}

export default SearchContainer