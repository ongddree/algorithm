let stu1 = [1,2,3,4,5];
let stu2 = [2,1,2,3,2,4,2,5];
let stu3 = [3,3,1,1,2,2,4,4,5,5]; 

function solution(answers) {
  let answer = [];

  let total1 = answers.filter((a,i) => a === stu1[i%5]).length;
  let total2 = answers.filter((a,i) => a === stu2[i%8]).length;
  let total3 = answers.filter((a,i) => a === stu3[i%10]).length;

  let max = Math.max(total1, total2, total3);

  (total1 === max) && answer.push(1);
  (total2 === max) && answer.push(2);
  (total3 === max) && answer.push(3);
  
  return answer;
}

solution([1,2,3,4,5]); // [1];
solution([1,3,2,4,2]); // [1,2,3];