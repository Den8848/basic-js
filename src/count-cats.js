let a = [[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]];

module.exports = function countCats(a) {
  let oneArr = a.flat();
    let numCats = oneArr.filter(function(elem) {
        return elem === "^^"
    }).length
    return numCats
};