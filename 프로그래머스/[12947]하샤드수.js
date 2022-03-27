function solution(number) {
  const harshad = (number + '')
    .split('')
    .reduce((a, b) => Number(a) + Number(b));
  return Boolean(number % harshad === 0);
}

solution(11); // false;
