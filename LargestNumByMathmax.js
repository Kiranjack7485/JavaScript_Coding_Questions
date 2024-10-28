function largestNum (numArr) {
    let largeNum = numArr[0]
    for (let i =0;i<numArr.length;i++){
        if (numArr[i]>largeNum){
            largeNum = numArr[i]
            return largeNum
        }
        
    }
}

console.log(largestNum([100,102,99,34,15]))