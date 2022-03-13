function solution(n) {
  var answer = [];
  const s = n + '';
  for (i = s.length - 1; i > -1; i--) {
    answer.push(+s[i]);
  }
  return answer;
}

solution(n);
