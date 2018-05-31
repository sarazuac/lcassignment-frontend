import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import  SearchContainer from './SearchContainer';
import { PropTypes } from 'react'

class PeopleContainer extends Component {

constructor(props){
    super(props);

    this.state = {
        people: [],
        input:''
    }
    this.searchFilter = this.searchFilter.bind(this)
}

componentDidMount(){
    axios.get('http://localhost:3001/api/v1/people')
    .then(response => {
      console.log(response)
      this.setState({people: response.data.data})
    })
    .catch(error => console.log(error))
}
handleSort(e) {
console.log(e.target.id);
}

searchFilter(e) {
    //console.log('this.props3', e) 
    this.setState({
            input: e
        }, () =>console.log('peoplecontainer', this.state.input) 
    );
}

  render() {
    return (
        <div>
            <SearchContainer searchFilter={this.searchFilter}/>
        
        <table className="table table-bordered">
            <thead className="table-header">
                <tr>
                    <th onClick={this.handleSort} id="name" value="name">Name</th>
                    <th onClick={this.handleSort}  id="country" value="country">Country</th>
                    <th onClick={this.handleSort}  id="mobile" value="mobile">Mobile</th>
                    <th onClick={this.handleSort}   id="landline" value="landline">Land-line</th>
                    <th onClick={this.handleSort}   id="address" value="address">Address</th>
                </tr>
            </thead>
            <tbody>
        {this.state.people.map((person) => {
          return(
            <tr className="tile" key={person.id} >
              <td>{person.name}</td>
              <td>{person.country}</td>
              <td>{person.mobile}</td>
              <td>{person.landline}</td>
              <td>{person.address}</td>
            </tr>
          )       
        })}
        </tbody>
        
      </table>
      </div>
    )
  }
}

export default PeopleContainer