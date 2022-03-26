function solution(array, n) {
  return array.sort((a, b) => a - b).sort((a, b) => (a[n] > b[n] ? 1 : -1));
}

solution(['sun', 'bed', 'car'], 1); //["car", "bed", "sun"]
