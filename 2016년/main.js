let a = 5;
let b = 24;

//1월: 31일, 2월: 윤년?, 3월: 31일, 4월: 30일, 5월: 31일, 6월: 30일, 7월: 31일, 8월: 31일, 9월: 30일
//10월: 31일, 11월: 30일, 12월: 31일

// function solution(a, b) {
//   var answer = '';
//   return answer;
// }

function getDayName(a, b) {
  var date = new Date(2016, (a - 1), b);
  console.log(date);
  console.log(date.toDateString());
  console.log(date.toDateString().slice(0));
  console.log(date.toDateString().slice(0, 3).toUpperCase());
    return date.toString().slice(0, 3).toUpperCase();
}

getDayName(a, b);

