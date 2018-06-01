import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import  SearchContainer from './SearchContainer';
import  SaveFilter from './SaveFilter';


class PeopleContainer extends Component {

constructor(props){
    super(props);

    this.state = {
        people: [],
        input:'',
        column:'',
        order:'asc'
    }
    this.searchFilter = this.searchFilter.bind(this);
    this.handleSort = this.handleSort.bind(this);
    
    this.handleSave = this.handleSave.bind(this);
}

componentWillMount(){
    axios.get('https://lcassignment.herokuapp.com/api/v1/people')
    .then(response => {
      //console.log(response)
      this.setState({people: response.data.data})
    })
    .catch(error => console.log(error));


    axios.get('https://lcassignment.herokuapp.com/api/v1/filter')
    .then(response => {
      


      this.setState({input: response.data.data.input,
            column: response.data.data.column,
            order: response.data.data.order,
        })
        document.getElementById("searchbar").value = response.data.data.input;
        //console.log('filter',this.state);
    })
    .catch(error => console.log(error));


}


handleSort(e) {

    if(e.target.id ==='name'){
        var byName = this.state.people;
        if(this.state.order === 'asc'){
            byName.sort(function(a,b) {
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
        
            this.setState({people:byName, column:'name', order:'desc'});
        }else{
            byName.reverse();
            this.setState({people:byName, column:'name', order:'asc'});
        }
        
    }

if(e.target.id === 'country'){
    var byCountry = this.state.people;
    if(this.state.order === 'asc'){
        byCountry.sort(function(a,b) {
            var x = a.country.toLowerCase();
            var y = b.country.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        this.setState({people:byCountry, column:'country', order:'desc'});
    }else{
        byCountry.reverse();
        this.setState({people:byCountry, column:'country', order:'asc'});
    }
}

if(e.target.id === 'mobile'){
    var byMobile = this.state.people;
    if(this.state.order === 'asc'){
        byMobile.sort(function(a,b) {
            var x = a.country.toLowerCase();
            var y = b.country.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        this.setState({people:byMobile, column:'mobile', order:'desc'});
    }else{
        byMobile.reverse();
        this.setState({people:byMobile, column:'mobile', order:'asc'});
    }
}

if(e.target.id === 'landline'){
    var byLandline = this.state.people;
    if(this.state.order === 'asc'){
        byLandline.sort(function(a,b) {
            var x = a.country.toLowerCase();
            var y = b.country.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        this.setState({people:byLandline, column:'landline', order:'desc'});
    }else{
        byLandline.reverse();
        this.setState({people:byLandline, column:'landline', order:'asc'});
    }
}

if(e.target.id === 'address'){
    var byAddress = this.state.people;
    if(this.state.order === 'asc'){
        byAddress.sort(function(a,b) {
            var x = a.country.toLowerCase();
            var y = b.country.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        this.setState({people:byAddress, column:'address', order:'desc'});

    }else{
        byAddress.reverse();
        this.setState({people:byAddress, column:'address', order:'asc'});
    }
}



}

handleSave() {
    console.log('click') ;
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
            <SaveFilter data={this.state} handleSave={this.handleSave}/>
        
        <table className="table table-bordered">
            <thead className="table-header">
                <tr>
                    <th onClick={this.handleSort} id="name" value="name">Name</th>
                    <th onClick={this.handleSort} id="country" value="country">Country</th>
                    <th onClick={this.handleSort} id="mobile" value="mobile">Mobile</th>
                    <th onClick={this.handleSort} id="landline" value="landline">Land-line</th>
                    <th onClick={this.handleSort} id="address" value="address">Address</th>
                </tr>
            </thead>
            <tbody>
        {this.state.people.map((person) => {

            
            if(this.state.input === ''){
                return(
                    <tr className="tile" key={person.id} >
                      <td>{person.name}</td>
                      <td>{person.country}</td>
                      <td>{person.mobile}</td>
                      <td>{person.landline}</td>
                      <td>{person.address}</td>
                    </tr>
                  ) 
            }else{
                if( person.name.toLowerCase().includes(this.state.input.toLowerCase()) 
                || person.country.toLowerCase().includes(this.state.input.toLowerCase())
                || person.mobile.toLowerCase().includes(this.state.input.toLowerCase())
                || person.landline.toLowerCase().includes(this.state.input.toLowerCase())
                || person.address.toLowerCase().includes(this.state.input.toLowerCase()) ){
                
                    return(
                        <tr className="tile" key={person.id} >
                        <td>{person.name}</td>
                        <td>{person.country}</td>
                        <td>{person.mobile}</td>
                        <td>{person.landline}</td>
                        <td>{person.address}</td>
                        </tr>
                    ) 
                }
            }
                
        })}
        </tbody>
        
      </table>
      </div>
    )
  }
}

export default PeopleContainer