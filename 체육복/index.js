let n = 5;                 
let lost = 	[1, 5];         
let reserve = [2, 3]; 

function solution(n, lost, reserve) {      
  return n - lost.filter(a => {
      const b = reserve.find(r => Math.abs(r-a) <= 1)
      if(!b) return true
      reserve = reserve.filter(r => r !== b)
  }).length
}

solution(n, lost, reserve );