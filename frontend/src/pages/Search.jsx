import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from '../components/SearchForm';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      departure: [],
      destination: [],
      departureSelect: "default",
      destinationSelect: "default"
    }
  }

  componentDidMount() {
    axios.get("/locations")
         .then(response => {
           this.setState({
             departure: response.data.departure,
             destination: response.data.destination
           });
         })
         .catch(error => {
           console.log(error);
         });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    const { departure, destination, departureSelect, destinationSelect } = this.state;

    const departureOptions = departure.map((location) => {
      return (<option value={location} >{location}</option>);
    })

    const destinationOptions = destination.map((location) => {
      return (<option value={location} >{location}</option>);
    })

    return (
      <div className="row" >
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <form>
              <div className="card-content">
                <SearchForm location="departure" selectValue={departureSelect} handleChange={this.handleChange} >
                  {departureOptions}
                </SearchForm>
                <br />
                <SearchForm location="destination" selectValue={destinationSelect} >
                  {destinationOptions}
                </SearchForm>
              </div>
              <div className="card-action">
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;