function solution(N, stages) {
  let objectArr = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((e) => e >= i).length;
    let cur = stages.filter((e) => e === i).length;
    objectArr.push({
      key: i,
      failRate: cur / reach,
    });
  }

  return objectArr.sort((a, b) => b.failRate - a.failRate).map((e) => e.key);
}

solution(7, [2, 1, 2, 4, 2, 4, 3, 3]); //[ 4, 3, 2, 1, 5, 6, 7 ]
