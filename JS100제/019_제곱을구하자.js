/*
공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
*/

const power = prompt("a의 b승 : a와 b를 공백으로 구분하여 입력하세요").split(' ');
console.log(power[0]**power[1]);