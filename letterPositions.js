const letterPositions = function(phrase) {
  let results = {};
  let counter = 0;
  //loop through each letter of the phrase
  for (const letter of phrase) {

    if (results[letter]) {
      results[letter].push(counter);
    } else {
      results[letter] = [counter];
    }
    counter += 1;
  }
  return results;
};

module.exports = letterPositions;