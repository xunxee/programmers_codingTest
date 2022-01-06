//N == 전체 스테이지의 개수
//stages == 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 array
//실패율이 높은 스테이지부터 내림차순으로

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  let result = [];
  for(let i = 1; i <= N; i++) {
      let reach = stages.filter((x) => x >= i).length;
      console.log(`reach: ${reach}`); //output == 8
      
      let curr = stages.filter((x) => x === i).length;
      console.log(`curr: ${curr}`); //output == 1
      
      result.push([i, curr/reach]);
      console.log(`result: ${result}`); //output == 1, 0.125
      
  }

  console.log(result);
  result.sort((a,b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

solution(N, stages);