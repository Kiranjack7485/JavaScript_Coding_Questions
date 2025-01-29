function removeDuplicate (myArr){
    let dupList = [];
    let dupSet = new Set();
    for (let i of myArr){
        if(!dupList.includes(i)){
            dupList.push(i)
        }
        else{
            dupSet.add(i)
        }
    }
    return dupSet
}

console.log(removeDuplicate([2,3,1,2,3,4,5,4,1,1,2]))
