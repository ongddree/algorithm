function solution(a, b) {
  return a.reduce((acc, cur, i) => (acc += a[i] * b[i]), 0);
}

solution([2, 2, 3, 4], [-3, -1, 0, 2]); // 0
