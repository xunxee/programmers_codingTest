let n = 118372; //return시 873211이 반환되어야함

function solution(n) {
	return Number((n + "").split("").sort((a, b) => Number(b) - Number(a)).join(""));
}

solution(n);