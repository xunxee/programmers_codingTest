let arr1 = [[1,2],[2,3]];
let arr2 = [[3,4],[5,6]];
// return시 [[4,6],[7,9]]이 반환됨

function solution(arr1, arr2) {
  return arr1.map((x, i) => x.map((y, j) => y + arr2[i][j]))
}

console.log(solution(arr1, arr2));