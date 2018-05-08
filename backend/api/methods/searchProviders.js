// loops through all the providers and calls their find flight function
const searchProviders = (state) => {
  return ({
    searchProviders: (origin, destination) => {
      const fullData = [];
      for (provider in state.providers) {
        fullData.push(...state.providers[provider].findFlight(origin, destination));
      }
      return fullData;
    }
  })
}

module.exports = searchProviders;