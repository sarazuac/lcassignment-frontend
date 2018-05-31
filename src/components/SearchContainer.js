import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class SearchContainer extends Component {

constructor(props){
    super(props);
    this.state = {
        people: []
    }
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
        <input className="searchbar" type="text" placeholder="Type text to filter"/>
      </div>
    )
  }
}

export default SearchContainer