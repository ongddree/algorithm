function solution(a, b) {
  const array = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekday = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  for (let i = 0; i < a - 1; i++) {
    b += array[i];
  }
  return weekday[b % 7];
}

solution(5, 24); // "TUE";
