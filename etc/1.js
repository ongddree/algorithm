const RESULT_STATUS = Object.freeze({
  CRONG_WIN: 2,
  POBI_WIN: 1,
  DRAW: 0,
  EXCEPTION: -1,
});

const START_PAGE = 1;
const END_PAGE = 400;

const onCheckInvalidPage = (pages) => {
  const [left, right] = pages;

  if (pages.length !== 2) return true;
  if (left % 2 !== 1) return true;
  if (right - left !== 1) return true;
  if (left <= START_PAGE || right >= END_PAGE) return true;
};

const onSplitNumber = (number) => {
  return `${number}`.split('').map(Number);
};

const onAddAllNumberList = (array) => {
  return array.reduce((acc, cur) => acc + cur, 0);
};

const onMultiplyNumberList = (array) => {
  return array.reduce((acc, cur) => acc * cur, 1);
};

const onCalculateMaxScore = ([left, right]) => {
  const splitLeftList = onSplitNumber(left);
  const splitRightList = onSplitNumber(right);

  return Math.max(
    onMultiplyNumberList(splitLeftList),
    onMultiplyNumberList(splitRightList),
    onAddAllNumberList(splitRightList)
  );
};

const solution = (pobi, crong) => {
  const candidateList = [pobi, crong];
  if (candidateList.some(onCheckInvalidPage)) {
    return RESULT_STATUS.EXCEPTION;
  }

  const [maxScorePobi, maxScoreCrong] = candidateList.map((candidate) =>
    onCalculateMaxScore(candidate)
  );

  if (maxScorePobi === maxScoreCrong) {
    return RESULT_STATUS.DRAW;
  }
  return maxScorePobi > maxScoreCrong
    ? RESULT_STATUS.POBI_WIN
    : RESULT_STATUS.CRONG_WIN;
};

module.exports = solution;
