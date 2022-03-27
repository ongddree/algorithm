function solution(arr1, arr2) {
  return arr1.map((e, i) => e.map((f, j) => f + arr2[i][j]));
}

solution(
  [
    [3, 4],
    [8, 1],
  ],
  [
    [1, 2],
    [3, 5],
  ]
); // [ [ 4, 6 ], [ 11, 6 ] ]
