// the main find flight function for each provider
// the api will loop through each provider and call this to return the data
// from each flight provider
const findFlight = (state) => {
  return ({
    findFlight: (origin, destination) => {
      return state.flights.filter((flight) => {
        return flight.origin === origin && flight.destination === destination;
      });
    }
  });
}

module.exports = findFlight;