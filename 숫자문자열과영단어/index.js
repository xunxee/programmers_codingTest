let s = "one4seveneight"

function solution(s) {
  var answer = s;
  
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for(let i = 0; i < numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      console.log(arr);
  }
  
  return answer;
}

solution(s);
