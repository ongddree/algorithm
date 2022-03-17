function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.indexOf(lost[i]) !== -1) {
      answer += 1;
      reserve.splice(reserve.indexOf(lost[i]), 1);
      lost.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < lost.length; i++) {
    if (reserve.indexOf(lost[i] - 1) !== -1) {
      answer += 1;
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
    } else if (reserve.indexOf(lost[i] + 1) !== -1) {
      answer += 1;
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
    }
  }

  return answer;
}

solution(10, [1, 1, 3], [1, 2]); // 9
