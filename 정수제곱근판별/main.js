//나의 풀이
let n = 3; //n은 11의 제곱으로, 11 + 1를 제곱한 144를 반환함

function solution(n) {
  let result = Math.sqrt(n);
  // console.log(result); //output == 11
  let plusOne = result + 1;

  return result * result == n ? plusOne * plusOne : -1
}

solution(n);

//'좋아요'가 가장 많은 풀이
var n = 121; //n은 11의 제곱으로, 11 + 1를 제곱한 144를 반환함

function solution(n){
    var result = 0;
    var n = Math.sqrt(n);
    result = Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
    return result;
}

solution(n);