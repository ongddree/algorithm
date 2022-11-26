function solution(number) {
  let result = 0;
  let i = 0;
  while (number > 0) {
    i += 1;
    if (number % i === 0) {
      result += 1;
    }
    number -= i;
  }
  return result;
}

//solution(15)  4
