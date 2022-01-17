let arr = [4,3,2,1]; //[4, 3, 2]를 return해야함
// let arr = [10];
//[10]일 떄는 [-1]을 return해야함

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1)
  if(arr.length !== 0) return arr;
  return [-1];
}

solution(arr);