let x = 2;
let n = 5;
//return시 [2,4,6,8,10]을 반환함

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

console.log(solution(x, n));