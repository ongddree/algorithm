function solution(d, budget) {
  var answer = 0;
  d.sort((a,b)=>(a-b));

  for(i=0; i<d.length; i++) {
      if((budget-d[i]) < 0) {
      break;
    }
    else {
      budget -= d[i];
      answer += 1;
    }
  }
  return answer;
}