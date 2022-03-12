function solution(numbers) {
  var answer = [];
  const numbers_length = numbers.length;
  for(i=0; i<(numbers_length-1); i++){
    for(j=i+1; j<numbers_length; j++) {
      answer.push(numbers[i]+numbers[j]);
    }
  }
  const newAnswer = [...new Set(answer)].sort(function(a,b){
    return a-b;
  });

  return newAnswer;
}