let board = [[0, 0, 0, 0, 0],[0, 0, 1, 0, 3],[0, 2, 5, 0, 1],[4, 2, 4, 4, 2],[3, 5, 1, 3, 1]];
let moves = [1,5,3,5,1,2,1,4];
//1번을 뽑았다는 것은 board 안의 모든 array[0]을 살펴봐야함을 의미
//5번을 뽑았다는 것은 board 안의 모든 array[4]을 살펴봐야함을 의미
//바구니에는 4, 3, 1, 1, 3, 2, 4가 담김

function solution(board, moves) {
  let count = 0;
  let stack = [];

  for(let i = 0; i < moves.length; i++) {
    let now = moves[i] - 1; //0, 4이 담김
    for(let j = 0; j < board.length; j++) {
      if(board[j][now] != 0) { //0이 아니라면 == true라면(인형이 들어있다면)
        if(stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
          console.log(`pop: ${stack}`);
        }
        else{
          stack.push(board[j][now])
          console.log(`push: ${stack}`);
        }
        board[j][now] = 0; //인형이 뽑힌 자리의 element는 중복을 방지하기 위해 0으로 설정해줌
        // console.log(stack);
        break; //break문은 코드블록을 탈출하는 것이 아니라, 정확히 말하면 레이블 문 && 반복문 && 스위치문을 탈출함!
      }
    }
  }
  console.log(stack)
  return count
}

solution(board, moves);