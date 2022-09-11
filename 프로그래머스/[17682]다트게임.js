function solution(dartResult) {
  const roundDataList = dartResult.match(/\d\d?.?\D/g);
  const convertBonus = { S: 1, D: 2, T: 3 };
  const scoreList = [];

  roundDataList.map((roundData, index) => {
    const split = roundData.match(/(^\d+)(S|D|T)([*|#])?/);
    const pureScore = Math.pow(split[1], convertBonus[split[2]]);
    const option = split[3];

    switch (option) {
      case '*': {
        scoreList[index] = pureScore * 2;
        if (index > 0) {
          scoreList[index - 1] = scoreList[index - 1] * 2;
        }
        break;
      }
      case '#': {
        scoreList[index] = -pureScore;
        break;
      }
      default: {
        scoreList[index] = pureScore;
      }
    }
  });

  return scoreList.reduce((arr, cur) => arr + cur, 0);
}

solution('1D2S3T*'); //59
