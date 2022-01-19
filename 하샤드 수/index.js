let arr = 10; //return true가 나와야 정답!

function solution(arr) {
  let arrs = String(arr).split("").reduce((acc, x) => acc + Number(x), 0);
  return arr % arrs == 0 ? true : false;
}

solution(arr);