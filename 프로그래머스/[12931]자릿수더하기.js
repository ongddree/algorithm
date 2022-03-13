function solution(n) {
  var answer = 0;

  const a = n + '';
  for (let i = 0; i < a.length; i++) {
    answer += +a[i];
  }

  return answer;
}
