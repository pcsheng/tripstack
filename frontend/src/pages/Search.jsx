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
           const departure = response.data.departure.reduce((accu, airport) => {
             !accu.includes(airport) && accu.push(airport);
             return accu;
           }, []).sort();
           const destination = response.data.destination.reduce((accu, airport) => {
            !accu.includes(airport) && accu.push(airport);
            return accu;
          }, []).sort();
           this.setState({
             departure: departure,
             destination: destination
           });
         })
         .catch(error => {
           console.log(error);
         });
  }

  componentDidUpdate() {
    window.M.AutoInit();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { departureSelect, destinationSelect } = this.state;
    (departureSelect !== "default") && (destinationSelect !== "default") && this.props.history.push(`/search/${departureSelect}/${destinationSelect}`);
  }

  render() {

    const { departure, destination, departureSelect, destinationSelect } = this.state;

    const departureOptions = departure.map((location) => {
      return (<option value={location} key={location} >{location}</option>);
    })

    const destinationOptions = destination.map((location) => {
      return (<option value={location} key={location} >{location}</option>);
    })

    return (
      <div className="row" >
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <form onSubmit={this.handleSubmit} >
              <div className="card-content">
                <SearchForm location="departure" selectValue={departureSelect} handleChange={this.handleChange} >
                  {departureOptions}
                </SearchForm>
                <br />
                <SearchForm location="destination" selectValue={destinationSelect} handleChange={this.handleChange} >
                  {destinationOptions}
                </SearchForm>
              </div>
              <div className="card-action">
                <button className="btn waves-effect waves-light" type="submit" >Find Flights
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;