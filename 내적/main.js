let n = 5;
let lost = 	[2, 5];
let reserve = [1, 3]	;
//체육수업이 가능한 인원 = n - lost;
//4가 return되어야 함

function solution(n, lost, reserve) {
  return n - lost.filter((value, index) => {
    //true를 주면 못빌린 학생임
    //false를 주면 빌린 학생임
    const b = reserve.find(r => Math.abs(r - value) <= 1)
    if(!b) return true
    reserve = reserve.filter(r => r != b)
  }).length
}

solution(n, lost, reserve);