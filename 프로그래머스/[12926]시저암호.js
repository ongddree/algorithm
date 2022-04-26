function solution(s, n) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (text === ' ') {
      answer += ' ';
      continue;
    }
    let compareArr = upper.includes(text) ? upper : lower;
    let index = compareArr.indexOf(text) + n;
    if (index >= compareArr.length) index -= compareArr.length;
    answer += compareArr[index];
  }
  return answer;
}

solution('a C d', 1); // 'b D e';
