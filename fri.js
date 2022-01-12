//Friday: r Triangle
//We have triangle made of blocks. 
//The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. 
//Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

function iTriangle(rows){
    if (rows==0) return 0;
    let result=0;
    for(let i=1;i<=rows;i++){
        result+=i;
    }
    return result;
}

function rTriangle(rows){
    
    if(rows==0) return 0;
    return rows+rTriangle(rows-1);
}

console.log(iTriangle(3));
console.log(rTriangle(3));