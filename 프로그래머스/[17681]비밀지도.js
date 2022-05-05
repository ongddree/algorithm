function solution(n, arr1, arr2) {
  return arr1.map((ele, i) =>
    (ele | arr2[i])
      .toString(2)
      .padStart(n, '0')
      .replace(/0/g, ' ')
      .replace(/1/g, '#')
  );
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]); // ["#####","# # #", "### #", "# ##", "#####"]
