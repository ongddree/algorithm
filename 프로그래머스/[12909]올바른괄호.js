function solution(s) {
  if (s[0] !== '(') return false;
  if (s[s.length - 1] !== ')') return false;

  let count = 0;
  for (const value of s) {
    if (value === '(') {
      count += 1;
    } else {
      count -= 1;
      if (count < 0) return false;
    }
  }
  return count === 0;
}
