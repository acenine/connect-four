
var checkColumn = (board, i, j) => {
  if (j < 3) {
    return false;
  }
  var val = board[i][j];
  for (var t = 1; t < 4; t++) {
    if (board[i][j - t] !== val) {
      return false;
    }
  }
  return true;
}
var checkRow = (board, i, j) => {
  var count = 0;
  var val = board[i][j];
  for (var t = 0; t < 7; t++) {
    var space = board[t][j];
    if (space && space === val) {
      count ++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
  }
  return false;
}
var checkUpDiag = (board, i, j) => {
  var count = 0;
  var val = board[i][j];
  var start = [null, null];
  var diff = i - j;
  if (diff > 3 || diff < -2) {
    return false;
  }
  if (diff < 0) {
    start = [0, -diff];
  }
  else{
    start = [diff, 0]
  }
  while(start[0] < 7 && start[1] < 6){
    var space = board[start[0]][start[1]];
    if (space && space === val) {
      count ++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
    start[0]++;
    start[1]++;
  }
  return false;
}
var checkDownDiag = (board, i, j) => {
  var count = 0;
  var val = board[i][j];
  var start = [null, null];
  var sum = i + j;
  if (sum < 3 || sum > 8) {
    return false;
  }
  if (sum > 6) {
    start = [6, sum - 6];
  }
  else {
    start = [sum, 0];
  }
  while(start[0] > -1 && start[1] < 6){
    var space = board[start[0]][start[1]];
    if (space && space === val) {
      count ++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
    start[0]--;
    start[1]++;
  }
  return false;
}
var checkWinner = (board, i, j) => {
  return (
    checkColumn(board, i, j) ||
    checkRow(board, i, j) ||
    checkUpDiag(board, i, j) ||
    checkDownDiag(board, i, j)
  );
}
export default checkWinner;
