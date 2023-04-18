const without = function(source, remove) {
  let newArray = [];
  let hasTrash = false;
  for (const item of source) {
    for (const trash of remove) {
      if (item === trash) {
        hasTrash = true;
        break;
      }
    }
    if (!hasTrash) {
      newArray.push(item);
    }
    hasTrash = false;
  }
  return newArray;
};

module.exports = without;