let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];

function solution(a, b) {
  console.log(a.reduce((acc, x, index) => {
    return acc + (x * b[index])
  }, 0))
}
solution(a, b);