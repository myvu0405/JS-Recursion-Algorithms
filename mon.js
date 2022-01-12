//Monday: rFactorial vs iFactorial
//Solve the Factorialize algorithm. First find an iterative solution and then a recursive solution.

function iFactorial(n) {
    if (n==0) return 1;
    let result =1;
    for (let i=1;i<=n;i++) {
        result*=i;

    }
    return result;
}

function rFactorial(n) {
    if (n==0) return 1;
    else return n*rFactorial(n-1);
}

let num=prompt('Please enter a number','0');


console.log(iFactorial(parseInt(num)));
console.log(rFactorial(parseInt(num)));