const newProvider = require('./methods/newProvider');
const treatData = require('./methods/treatData');
const allLocations = require('./methods/allLocations');
const searchProviders = require('./methods/searchProviders');

// the api is the main method by which requests will interact with the server
const api = () => {
  const state = {
    providers: {}
  }

  return Object.assign(state, newProvider(state), treatData(state), allLocations(state), searchProviders(state));
}

module.exports = api;