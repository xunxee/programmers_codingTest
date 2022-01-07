let nums = [3,1,2,3]; //return으로 3을 받아야함

function solution(nums) {
  const max = nums.length / 2;
  // const arr = [...new Set(nums)];
  const arr = [...new Set(nums)];
  // console.log(arr);

  return arr.length > max ? max : arr.length
}


solution(nums);

// let nums = [3,1,2,3];

// const a = [...new Set(nums)];
// console.log(a); //output == 