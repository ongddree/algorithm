const problem1 = require('./1');

describe('problem1', () => {
  test('pobi와 crong의 길이는 2이다', () => {
    expect(problem1([97, 98, 100], [197, 198])).toEqual(-1);
  });

  test('pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.', () => {
    expect(problem1([131, 133], [211, 212])).toEqual(-1);
  });

  test('왼쪽 페이지는 홀수고, 오른쪽 페이지는 짝수다', () => {
    expect(problem1([132, 133], [211, 212])).toEqual(-1);
  });

  test('시작 면(1)이나 마지막 면(400)이 나오도록 책을 펼치지 않는다.', () => {
    expect(problem1([1, 2], [211, 212])).toEqual(-1);
    expect(problem1([131, 132], [399, 401])).toEqual(-1);
  });

  test('[97,98], [197,198]의 실행결과는 0이 나와야한다.', () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });

  test('[131,132], [211,212]의 실행결과는 1이 나와야한다.', () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });

  test('[99, 102], [211,212]의 실행결과는 1이 나와야한다.', () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1);
  });
});
