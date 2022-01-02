let nums = [1,2,3,4];
//1, 2, 3
//1, 2, 4
//2, 3, 4
//3, 4, 1

function primecheck(n){
  for(let i = 2; i <= Math.sqrt(n); i++) { //Math.sqrt 함수는 n의 제곱근을 return함!
    if(n % i == 0){ //n이 9라면 9 % 2는 1이므로 false이고, if문을 중지하고 for문으로 다시 이동함
        return false; // 그렇게 i++로 인해서 i의 값은 3이 되었고 9 % 3은 0이므로 true! 코드블록을 실행함
    } //반환문을 만나면 함수를 빠져나오므로 n의 값이 9일 경우 false를 반환함
  }
  return true; //i의 값이 7인 경우, 7의 제곱근은 2.64...!
} //7 % 2도 1이므로 false이고, for문으로 다시 올라가 i의 값은 3이 됨
  //for문의 조건식에서 i는 3이므로 false이고, for문을 종료함 -> 그렇게 return true를 만남!

function solution(nums){
  let cnt = 0; //i가 0일 때, j는 1, 2
  for(let i = 0; i < nums.length - 2; i++) {         //i는 0, 1
    for(let j = i + 1; j < nums.length - 1; j++) {   //j는 1, 2
      for(let w = j + 1; w < nums.length; w++) {     //w는 2, 3
        //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

        if(primecheck(nums[i] + nums[j] + nums[w])) {
          //console.log(nums[i]+nums[j]+nums[w]);
          cnt++;
        }
      }
    }
  }
  return cnt;
}

solution(nums);