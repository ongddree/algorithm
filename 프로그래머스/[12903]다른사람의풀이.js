function solution(s) {
  const num = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[num] : s[num - 1] + s[num];
}

solution('abcdef'); // "cd"
