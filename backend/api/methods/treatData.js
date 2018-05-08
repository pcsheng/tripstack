// runs the data treatment functions so that the data is usable
// in this case, there is only one treatment function -- processString
const treatData = (state) => {
  return ({
    treatData: () => {
      for (provider in state.providers) {
        typeof state.providers[provider].flights === "string" && state.providers[provider].processString();
      }
    }
  });
}

module.exports = treatData;