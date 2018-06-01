import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';


class SaveFilter extends Component {

constructor(props){
    super(props);

}

handleSave(e) {
    //console.log('click', this.props.data) ;
    axios.post('https://lcassignment.herokuapp.com/api/v1/filter', {
        input: this.props.data.input,
        column: this.props.data.column,
        order: this.props.data.order
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}



  render() {
    return (
        <div>
        <button className="SaveFilter btn btn-info btn-sm"
         onClick={this.handleSave.bind(this)}
          type="button">Save Filter</button>
      </div>
    )
  }
}

export default SaveFilter