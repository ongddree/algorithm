function solution(arr, divisor) {
  const answer = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

solution([2, 36, 1, 3], 1); //[ 1, 2, 3, 36 ]
