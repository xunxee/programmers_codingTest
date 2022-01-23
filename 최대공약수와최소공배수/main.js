let n = 3;
let m = 12;
//return시 최대공약수인 3, 최소공배수인 12가 [3, 12] 반환됨

function greatestCommonDivisor(n, m) {return m ? greatestCommonDivisor(m, n % m) : Math.abs(n);}
function leastCommonMultipleOfTwo(n, m) {return (n * m) / greatestCommonDivisor(n, m);}
function gcdlcm(n, m) {
    return [greatestCommonDivisor(n, m),leastCommonMultipleOfTwo(n, m)];
}

gcdlcm(n, m);