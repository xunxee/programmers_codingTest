let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
  return commands.map(command => {
    // console.log(command); //output == [2, 5, 3] and [4, 4, 1] and [1, 7, 3]
    const [sPosition, ePosition, position] = command
    // console.log(sPosition);
    
    const newArray = array
      .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
      .sort((a,b) => a - b)
    return newArray[position - 1] //output == 5 and 6 and 3
  })
}

// function solution(array, commands) {
//   var answer = [];
//   // let result = array.slice(1, 5); //output == [5, 2, 6, 3]
  
//   for(let i = 0; i < commands.length; i++) {
//     // let startNum = (commands[i][0])-1; //output == 1
//     // console.log(`startNum은 ${startNum} 입니다`)
//     let result = array.slice(commands[i][0] - 1, commands[i][1]).sort();
//     // console.log(`result는 ${result}입니다`) //output == [2,3,5,6]

//     // let resultSort = result.sort();
//     // console.log(`정리해서 ${resultSort} 입니다`); //output == 정리해서 2,3,5,6 입니다
//     // console.log(resultSort);

//     // let thirdNum = result[commands[i][2] - 1];
//     // console.log(thirdNum); //output == 5

//     answer.push(result[commands[i][2] - 1]);
//   }


//   // console.log(result);
//   console.log(answer);
//   return answer;
// }

solution(array, commands);
console.log(solution(array, commands));