function solution(numbers) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const diff_array = array.filter((e) => !numbers.includes(e));
  return diff_array.reduce((pre, cue) => pre + cue);
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); // 14;
