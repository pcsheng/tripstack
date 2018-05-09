import React, { Component } from 'react';
import axios from 'axios';

import FlightCard from '../components/FlightCard';

class Flights extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flights: []
    }
  }

  componentDidMount() {
    const { departure, destination } = this.props.match.params;
    axios.get('/flights', {params: {
      departure: departure,
      destination: destination
    }}).then(response => {
      this.setState({
        flights: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {

    const { flights } = this.state;

    const available = flights.reduce((accu, flight) => {        // removes duplicate by comparing the stringified objects
      !accu.includes(JSON.stringify(flight)) && accu.push(JSON.stringify(flight));
      return accu;
    }, []).map((flightText) => {              // converts strings back to objects
      return JSON.parse(flightText);
    }).sort((a, b) => {               // sorts the data array by price
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0
    }).map((flight, index) => {       // converts to usable HTML
      return (
        <FlightCard key={index} >
          <span className="card-title" >{flight.price}</span>
          <p>From: {flight.departure}</p>
          <p>{flight.departureTime}</p>
          <p>To: {flight.destination}</p>
          <p>{flight.destinationTime}</p>
        </FlightCard>
      )
    })

    return (
      <div className="row" >
        {available.length ? available : <h5>There are no flights available for the chosen route</h5>}
      </div>
    )
  }
}

export default Flights;