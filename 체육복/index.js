let n = 5;
let lost = 	[2, 4];
let reserve = [1, 3, 5];

function solution(n, lost, reserve) {      
  // let result = lost.filter(a => {
  return n - lost.filter(a => { //.filter를 통해 결국 체육복을 못 입은 학생이, 새로운 array에 담김
      const b = reserve.find(r => Math.abs(r-a) <= 1) //const b에 1, 3이 담김
      // console.log(`b의 값은: ${b}`); //output == 3
      if(!b) return true //!1은 false이므로 if문을 빠져나감
      // if(!b) console.log(true);
      reserve = reserve.filter(r => r !== b) //reserve에는 [3, 5], [5]가 담김
      // console.log(`reserve의 값은: ${reserve}`);

  }).length
  // console.log(result.length);
}

// function solution(n, lost, reserve) {
//   let participant = [];
//   let kepper = n - (lost.length + reserve.length);
  
//   for(let i = 0; i < lost.length; i++) {
//     for(let j = 0; j < reserve.length; j++) {
//       if(lost[i] + 1 === reserve[j] || lost[i] - 1 === reserve[j]) {
//         participant.push(lost[i])
//         participant.push(reserve[j])
//         reserve.shift(reserve[j]);
//         // console.log(`체육복을 빌린 학생: ${participant}`);
//         // console.log(participant);
//         console.log(reserve);
//         break;
//       }
//     }
//   }

//   let total = (reserve.length) + (participant.length) + kepper;
//   console.log(`수업 참가 인원은: ${total}`);

//   return total;
// }

solution(n, lost, reserve );