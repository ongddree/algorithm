function solution(a, b) {
  let gcd = calc_gcd(a, b);
  return [gcd, (a * b) / gcd];
}

function calc_gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return calc_gcd(b, a % b);
}

solution(3, 10); // [1,30]
