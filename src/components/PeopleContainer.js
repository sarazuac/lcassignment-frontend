import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class PeopleContainer extends Component {

constructor(props){
    super(props);
    this.state = {
        people: []
    }
}

componentDidMount(){
    axios.get('http://localhost:3001/api/v1/people')
    .then(response => {
      console.log(response)
      this.setState({people: response.data.data})
    })
    .catch(error => console.log(error))
}


  render() {
    return (
        <table className="table table-bordered">
            <thead className="table-header">
                <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Mobile</th>
                <th>Land-line</th>
                <th>Address</th>
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
    )
  }
}

export default PeopleContainer