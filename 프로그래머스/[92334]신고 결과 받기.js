function solution(id_list, report, k) {
  const uniq_report = [...new Set(report)];

  //유저: 메일받은 횟수
  const answer = id_list.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  //유저:[신고자];
  const report_list = id_list.reduce((acc, cur) => {
    acc[cur] = [];
    return acc;
  }, {});

  //유저: [신고자] 정리;
  uniq_report.map((i) => {
    const [reporter, user] = i.split(' ');
    report_list[user].push(reporter);
  });

  //k번 이상 신고 받은 유저를 신고한 이들에게 보낼 메일 count
  id_list.map((i) => {
    if (report_list[i].length >= k) {
      [...report_list[i]].map((i) => answer[i]++);
    }
  });

  return Object.values(answer);
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k = 2;

solution(id_list, report, k); // [2,1,1,0]
