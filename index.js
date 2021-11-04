const { fetchBreedDescription } = require('./breedFetcher');

if (process.argv.length !== 3) {
  console.log("Usage : node breedFetcher.js cat-breed");
  console.log("        node breedFetcher.js Siberian");
} else {
  const breedName = process.argv[2];

  fetchBreedDescription(breedName, (error, description) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(description);
    }
  });
}
