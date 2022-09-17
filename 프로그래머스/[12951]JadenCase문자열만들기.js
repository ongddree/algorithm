function solution(s) {
  return s
    .split(' ')
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
    .join(' ');
}

solution('3people unFollowed me'); // "3people Unfollowed Me";
