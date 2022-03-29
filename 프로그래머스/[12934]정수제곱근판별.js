function solution(num) {
  const sqrt_num = Math.sqrt(num);
  return sqrt_num === parseInt(sqrt_num) ? Math.pow(sqrt_num + 1, 2) : -1;
}

solution(121); // 144
