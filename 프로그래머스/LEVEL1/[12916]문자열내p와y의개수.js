function solution(string) {
  return string.toUpperCase().split('P').length ===
    string.toUpperCase().split('Y').length
    ? true
    : false;
}
