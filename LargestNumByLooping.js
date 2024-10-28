myArr = [106,39,18,45,32,111,110,37];

function maxFuncByLoop (myArr){
    let maxNum = myArr[0];
    for (let i=0;i<myArr.length;i++){
        if(myArr[i]>maxNum){
            maxNum = myArr[i]
        }
    }
    return maxNum
}

console.log(`The greatest number from looping is found to be: ${maxFuncByLoop (myArr)}`);