function solution(numbers, hand) {
  const userHand = hand === 'right' ? 'R' : 'L';

  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let locateL = '*';
  let locateR = '#';
  let answer = '';

  function getDistance(locateL, locateR, num) {
    //맨하탄 거리
    const disLeft =
      Math.abs(pos[locateL][0] - pos[num][0]) +
      Math.abs(pos[locateL][1] - pos[num][1]);
    const disRight =
      Math.abs(pos[locateR][0] - pos[num][0]) +
      Math.abs(pos[locateR][1] - pos[num][1]);
    if (disLeft === disRight) return userHand;
    else if (disLeft < disRight) return 'L';
    else return 'R';
  }

  for (let num of numbers) {
    //1,4,7일 때
    if (num % 3 === 1) {
      answer += 'L';
      locateL = num;
    }
    //3,6,9일 때, 0%3===0 방지
    else if (num % 3 === 0 && num !== 0) {
      answer += 'R';
      locateR = num;
    }
    //2,5,8,0일 때
    else {
      answer += getDistance(locateL, locateR, num);
      answer[answer.length - 1] === 'L' ? (locateL = num) : (locateR = num);
    }
  }

  return answer;
}
