const processString = require("./methods/processString");
const getLocation = require("./methods/getLocation");
const findFlight = require("./methods/findFlight");

const provider = (flights) => {
  const state = {
    flights: flights
  }

  return Object.assign(state, processString(state), getLocation(state), findFlight(state));
}

module.exports = provider;