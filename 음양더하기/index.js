let absolutes = [4,7,12];
let signs = [true,false,true];

function solution(absolutes, signs) {
  console.log(absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0));
}

// function solution(absolutes, signs) {
//   let numbers = [];
//   // var answer = 123456789;

//   for(let i = 0; i < absolutes.length; i++) {
//     if(signs[i] === true) {
//       numbers.push(+absolutes[i]);
//       // console.log(`+숫자인: ${numbers}`)
//     } else {
//       numbers.push(-absolutes[i]);
//       // console.log(`-숫자인: ${numbers}`)
//     }
//     // console.log(numbers);
//   }

//   let result = numbers[0] + numbers[1] + numbers[2];
//   // console.log(`result: ${result}`);
//   return result;
// }

solution(absolutes, signs);