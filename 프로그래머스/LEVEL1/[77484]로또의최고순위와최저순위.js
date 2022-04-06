function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const zeroCount = lottos.filter((e) => !e).length;
  const commonCount = lottos.filter((e) => win_nums.includes(e)).length;
  const maxCount = commonCount + zeroCount;
  return [rank[maxCount], rank[commonCount]];
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]); // [3,5]
