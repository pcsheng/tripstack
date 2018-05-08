const newProvider = require('./methods/newProvider'),
      treatData = require('./methods/treatData')

// the api is the main method by which requests will interact with the server
const api = () => {
  const state = {
    providers: {}
  }

  return Object.assign(state, newProvider(state), treatData(state));
}

module.exports = api;