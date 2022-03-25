function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  } else if (s.includes('e')) {
    return false;
  } else return !isNaN(s);
}

solution('a123'); // false;
