//Thursday: iFib vs rFib
//Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=1 representing the start of the sequence.
function iFibo(n){
    if (n==1) return 1;
    let num1=0;
    let num2=1;
    let result=0;
    for (let i=2;i<=n;i++){
        result=num1+num2;
        num1=num2;
        num2=result;
    }
    return result;
}

function rFibo(n) {
    if (n==0) return 0;
    else if (n==1) return 1;
    return rFibo(n-1)+rFibo(n-2);

}

console.log(iFibo(8));
console.log(rFibo(8));