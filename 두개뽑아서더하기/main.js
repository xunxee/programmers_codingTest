let numbers = [2,1,3,4,1];
//(2, 1) (2, 3) (2, 4) (2, 1)
//(1, 3) (1, 4) (1, 1)
//(3, 4) (3, 1)

function solution(numbers) {
  let result = [];
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      // console.log(numbers[i] + numbers[j]);
      result.push(numbers[i] + numbers[j])
    }
  }
  console.log(result); //output == [3, 5, 6, 3, 4, 5, 2, 7, 4, 5]
  let answer = result.filter((value, index) => result.indexOf(value) === index)
  console.log(answer);//output == [3, 5, 6, 4, 2, 7]
  answer.sort((a, b) => a -b)
  console.log(answer);
}

solution(numbers);