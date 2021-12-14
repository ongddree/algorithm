/*
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입출력

입력 : 거꾸로
출력 : 로꾸거
*/

//답 1

const sentence = prompt("문장을 입력하면 거꾸로 변해요!");
let output = "";
for (let i = sentence.length - 1; i >= 0; i--) {
  output += sentence[i];
}
console.log(output);

//답 2

const sentence = prompt("문장을 입력하면 거꾸로 변해요!");
let output = "";
for (let i = 0; i < sentence.length; i++) {
  output = sentence[i] + output;
}
console.log(output);
