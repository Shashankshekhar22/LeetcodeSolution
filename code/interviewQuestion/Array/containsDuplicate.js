var containsDuplicate = function (array) {
  let map = {};
  let duplicateExist = false;
  for (let i = 0; i < array.length; i++) {
    map[array[i]] = map[array[i]] + 1 || 0;
  }
  for (let v in map) {
    if (map[v] > 0) {
      duplicateExist = true;
    }
  }
  return duplicateExist;
};
