/*
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

입출력

입력 : 10 2
출력 : 5 0
*/

const number = prompt("a/b의 몫과 나머지를 구합니다. a와 b를 공백으로 구분해서 입력하세요.").split(' ');
const share = Math.floor(number[0]/number[1]);
const left = number[0]-number[1]*share;
console.log(`${share} ${left}`);