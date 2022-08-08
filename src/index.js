
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) return [];
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 1) matrix[i].sort( ( (a, b) => b - a ) );
      for (let item of matrix[i]) {
          arr.push(item);
      }
  }
  return arr;
}
