function solution(string) {
  return string
    .split(' ')
    .map((i) =>
      i
        .split('')
        .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j))
        .join('')
    )
    .join(' ');
}

solution('try hello world'); // 'TrY HeLlO WoRlD'
