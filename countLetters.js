const countLetters = function(phrase) {
  let results = {};

  for (const letter of phrase) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;