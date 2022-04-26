function solution(price, money, count) {
  let cost = 0;
  for (let i = 1; i < count + 1; i++) {
    cost += price * i;
  }

  return cost > money ? cost - money : 0;
}

solution(3, 20, 4); // 10
