const request = require('request');

const loadPage = function(breed) {
  let query = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];
  request(query, (error, response, body) => {
    if (error) {
      console.log('An error occurred requesting the page :', error); // Print the error if one occurred
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) { //in case not found
        console.log(`Your cat breed , ${breed}, is not found. Please try again`);
        return;
      }
      console.log(data[0]["description"]);
      //console.log(typeof data);
      //console.log('Page downloaded successfuly with a statusCode:', response & response.statusCode); // Print the response status code if a response was received
    }
  });
};

if (process.argv.length !== 3) {
  console.log("Usage : node breedFetcher.js cat-breed");
  console.log("        node breedFetcher.js Sibegrian");
} else {
  loadPage(process.argv[2]);
}

