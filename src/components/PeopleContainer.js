import React, { Component } from 'react';
import axios from 'axios';

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
        <div>
        {this.state.people.map((person) => {
          return(
            <div className="tile" key={person.id} >
              <h4>{person.name}</h4>
              <p>{person.address}</p>
            </div>
          )       
        })}
      </div>
    )
  }
}

export default PeopleContainer