/*
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
*/

const value = prompt("알파벳을 입력하세요.").split("");

function doChange(i) {
  if (i === i.toUpperCase()) {
    return i.toLowerCase();
  } else return i.toUpperCase();
}

const result = value.map(doChange).join("");
console.log(result);
