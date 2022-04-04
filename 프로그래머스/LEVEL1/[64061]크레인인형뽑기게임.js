function solution(board, moves) {
  const newMoves = moves.map((e, i) => e - 1);
  const array = [];
  let answer = 0;
  for (let i = 0; i < newMoves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      switch (board[j][newMoves[i]]) {
        case 0:
          break;
        case undefined:
          break;
        case array[array.length - 1]:
          array.pop();
          board[j][newMoves[i]] = 0;
          answer += 2;
          j += board.length;
          break;
        default:
          array.push(board[j][newMoves[i]]);
          board[j][newMoves[i]] = 0;
          j += board.length;
      }
    }
  }
  return answer;
}

// const a = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];

// const b = [1,5,3,5,1,2,1,4];

// solution(a,b);  4
