let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];

//만점 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter(v => win_nums.includes(v)).length;
  let zeroCount = lottos.filter(v => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
solution(lottos, win_nums);

// //나의 풀이
// function solution(lottos, win_nums) {
//   var answer = [];

//   const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
//   const maximum = correct + 1;
//   const minimal = correct + 3;

//   if(correct === 0) {
//     answer = [1, 6]
//   } else if(correct === 6) {
//     answer = [1, 1]
//   } else{
//     answer.push(maximum);
//     answer.push(minimal);
//   }

//   console.log(answer);
//   return answer;
// }


