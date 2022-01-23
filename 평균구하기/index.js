let arr = [ 1,2,3,4 ];
//return시 arr의 평균값인 2.5를 반환해야함

function solution( arr ) {
  return arr.reduce(( acc, x ) => acc + x , 0) / arr.length;
}

console.log(solution( arr ));