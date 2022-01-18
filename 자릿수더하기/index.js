let n = 123;

function solution(n){
	let numbers = String(n);
	return numbers.split("").reduce((acc, x) => acc + Number(x), 0);
}

solution(n);