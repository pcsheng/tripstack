const processString = require("./methods/processString");

const provider = (flights) => {
  const state = {
    flights: flights
  }

  return Object.assign(state, processString(state));
}

module.exports = provider;