import React, { Component } from 'react';
import '../App.css';


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

}


  render() {
    return (
        <div>
        <input className="searchbar" id="searchbar"
         onChange={this.handleFilter.bind(this)}
          type="text" 
          value={this.state.input} 
          placeholder="Type text to filter"/>
      </div>
    )
  }
}

export default SearchContainer