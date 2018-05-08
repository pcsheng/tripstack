const provider = require('../../provider/provider');

// makes new instances of providers and adds them to state
const newProvider = (state) => {
  return ({
    newProvider: (name, flights) => {
      state.providers[name] = provider(flights);
    }
  });
}

module.exports = newProvider;