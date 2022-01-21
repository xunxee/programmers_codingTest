let n = 12345; //return시 [5,4,3,2,1]을 반환해야함

function solution(n) {
  let result = (n + "").split("").reverse().map(a => Number(a));
  return result
}

console.log(solution(n));