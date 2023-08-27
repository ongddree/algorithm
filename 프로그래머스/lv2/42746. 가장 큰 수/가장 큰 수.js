const sortByJoinNumber = (a, b) => {
  return `${a}${b}` > `${b}${a}` ? -1 : 1;
};

function solution(numbers) {
  if(numbers.every(e => e === 0)) {
    return '0';
  }
  return numbers.sort(sortByJoinNumber).join("")
}
