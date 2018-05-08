// the main find flight function for each provider
// the api will loop through each provider and call this to return the data
// from each flight provider
const findFlight = (state) => {
  return ({
    findFlight: (departure, destination) => {
      return state.flights.filter((flight) => {
        return flight.departure === departure && flight.destination === destination;
      });
    }
  });
}

module.exports = findFlight;