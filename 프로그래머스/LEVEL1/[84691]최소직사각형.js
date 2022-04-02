function solution(sizes) {
  let sizes_sort = sizes.map((item) => item.sort((a, b) => b - a));
  let widthMax = Math.max.apply(
    null,
    sizes_sort.map((item) => item[0])
  );
  let heightMax = Math.max.apply(
    null,
    sizes_sort.map((item) => item[1])
  );

  return widthMax * heightMax;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]); // 4000
