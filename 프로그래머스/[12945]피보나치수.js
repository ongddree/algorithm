function solution(number) {
  const list = [0, 1];

  for (let i = 2; i < number + 1; i++) {
    list[i] = (list[i - 1] + list[i - 2]) % 1234567;
  }
  return list[number];
}

solution(6); //8
