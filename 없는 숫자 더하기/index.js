let numbers = [5,8,4,0,6,7,9];
//numbers에는 1, 2, 3이 없으므로 1 + 2 + 3 = 6
//result == 6

function solution(numbers) {
  let tenNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(tenNum.reduce((acc, x) => acc + x , 0));

  //true일 때 numbers에 없는 번호를 담아야함
  return tenNum.filter((value, index) => numbers.includes(value) == 0).reduce((a, b) =>a + b ,0)
  // console.log(result); //output == [1, 2, 3]
  // console.log(result); //output == 6
}

solution(numbers);