
module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  return matrix.map((row, index) => {
    if (index % 2) {
      return row.reverse();
    }
    return row;
  }).flat();
}
