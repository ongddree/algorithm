function solution(array) {
  let answer = 0;
  let array_length = array.length;

  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < array_length - 2; i++) {
    for (let j = i + 1; j < array_length - 1; j++) {
      for (let k = j + 1; k < array_length; k++) {
        if (isPrime(array[i] + array[j] + array[k])) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}

solution([1, 2, 7, 6, 4]); // 4
