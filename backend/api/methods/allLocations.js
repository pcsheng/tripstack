// api for calling get location function for each of the providers
const allLocations = (state) => {
  return ({
    allLocations: (locationString) => {
      const fullData = [];
      for (provider in state.providers) {
        fullData.push(...state.providers[provider].getLocation(locationString).reduce((accu, location) => {
          !(accu.includes(location)) && accu.push(location);
          return accu;
        }, []));
      }
      return fullData;
    }
  })
}

module.exports = allLocations;