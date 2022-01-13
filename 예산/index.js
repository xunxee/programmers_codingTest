// let a = 1;
// let b = 2;

// console.log(a); //output == 0001(2)
// console.log(~a); //output == 1110(2), -2(10)

// console.log(b); //output == 0010(1)
// console.log(~b); //output == 1101(1), -3(10)

let d = [1,3,2,5,4];
let budget = 9;

// let result = (d.sort((a ,b) => a - b).map(v => budget -= v).findIndex(v => v < 0) || d.length);
let result = ~(~d.sort((a ,b) => a - b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
//d.sort((a ,b) => a - b) output == [1, 2, 3, 4, 5]
//(d.sort((a ,b) => a - b).map(v => budget -= v)) outpout == [8, 6, 3, -1, -6]
//(d.sort((a ,b) => a - b).map(v => budget -= v).findIndex(v => v < 0) output == 3
//~.findIndex를 사용했을때 판별되지 못할 경우는 -1이 return되는데,
//이때는 -1을(1111) ~연산자를 사용해 bit를 뒤집어서 0000으로 만들어서 ||연산자로 코드가 실행하도록 함
//
console.log(result);

// let list = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(list.findIndex(a => a > 4)); //output == 4

