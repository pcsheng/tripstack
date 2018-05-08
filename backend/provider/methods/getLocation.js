// gets the origin/destination airports in order to populate dropdowns in the front end
const getLocation = (state) => {
  return ({
    getLocation: (locationString) => {
      return state.flights.map((flight) => {
        return flight[locationString];
      })
    }
  })
}

module.exports = getLocation;