function solution(n) {
  i = 2;
  while (n % i !== 1) {
    i++;
  }
  return i;
}

solution(10); // 3
