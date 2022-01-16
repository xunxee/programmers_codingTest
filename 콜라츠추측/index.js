let num = 6;

function solution(num) {
  let count = 0;
  while(count < 500 && num != 1) {
    num % 2 ? num = num * 3 + 1 : num = num / 2;
    count = count + 1;
    console.log(`count는 ${count}입니다`);
    console.log(`num는 ${num}입니다`);
  }
  return num == 1 ? count : -1;
}

solution(num)