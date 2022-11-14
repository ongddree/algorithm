function solution(a, b) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
