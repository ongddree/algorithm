function solution(phone_number) {
  var answer = '';
  let length = phone_number.length;
  for(i=0; i<length; i++) {
    if(i < length-4){
      answer= answer+'*';
    }
    else {
      answer = answer + phone_number[i];
    }
    
  }
  return answer;
}