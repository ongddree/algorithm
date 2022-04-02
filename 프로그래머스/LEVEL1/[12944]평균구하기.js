function solution(arr) {
  return arr.reduce((acc, cul) => acc + cul) / arr.length;
}

solution([1, 2, 3, 4]); // 2.5
