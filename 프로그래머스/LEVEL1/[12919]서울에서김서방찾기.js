function solution(seoul) {
  const answer = seoul.indexOf('Kim');
  return `김서방은 ${answer}에 있다`;
}

solution(['Jane', 'Kim']); // '김서방은 1에 있다'
