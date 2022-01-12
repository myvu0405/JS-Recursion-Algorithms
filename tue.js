//Tuesday: Bunny Ears
//We have a number of bunnies and each bunny has two big floppy ears. 
//We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
function rBunnyEars(bunnies){
    if(bunnies==0) return 0;
    else return 2+ rBunnyEars(bunnies-1);
}

function iBunnyEars1(bunnies) {
    
    return 2*bunnies;
}

function iBunnyEars2(bunnies) {
    if(bunnies==0) return 0;

    let result=0;
    for(let i=1;i<=bunnies;i++){
        result+=2;
    }
    return result;
}

console.log(rBunnyEars(6));
console.log(iBunnyEars1(7));
console.log(iBunnyEars2(8));


