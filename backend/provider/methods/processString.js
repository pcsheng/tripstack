// this function is here in case the data is scraped as a string
// instead of a JSON object
const processString = (state) => {
  return ({
    processString: () => {
      const dataArr = state.flights.split("\n").map((row, index) => {
        // makes each other row into an object with labels
        // ideally this regex expression has all the possible splitters
        const rowArr = row.split(/[,|]/).map((field, index) => {
          switch (index) {
            case 0:
              return {origin: field};
            case 1:
              return {departTime: field};
            case 2:
              return {destination: field};
            case 3:
              return {destinationTime: field};
            case 4:
              return {price: field};
          }
        });
        return Object.assign({}, ...rowArr);
      });

      // cuts out the first row which only contains labels
      dataArr.shift();
      state.flights = dataArr;

    }
  });
}

module.exports = processString;