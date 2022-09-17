function solution(s) {
  return [Math.min(...s.split(' ')), Math.max(...s.split(' '))].join(' ');
}

solution('1 2 3 4'); // '1 4'
