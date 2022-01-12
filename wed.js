//Wednesday: Power N
//First solve this algorithm iteratively, then recursively.

function iPower(base,exponent){
    if (exponent==0) return 1;
    let result=1;
    for(let i=1;i<=exponent;i++) {
        result*=base;
    }
    return result;
}

function rPower(base,exponent){
    if(exponent==0) return 1;
    return base*rPower(base,exponent-1);
}

console.log(iPower(3,4));
console.log(rPower(3,4));