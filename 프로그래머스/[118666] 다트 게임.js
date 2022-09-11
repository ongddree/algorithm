function solution(survey, choices) {
  const MBTI = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((type) => type.split('').forEach((t) => (MBTI[t] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types
    .map(([left, right]) => (MBTI[left] >= MBTI[right] ? left : right))
    .join('');
}

const choices = [5, 3, 2, 7, 5];
const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];

solution(survey, choices); // 'TCMA'
