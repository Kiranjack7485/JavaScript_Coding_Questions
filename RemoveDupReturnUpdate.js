function removeDuplicate (myArr){
    let updateList = [];
    for(let i of myArr){
        if(!updateList.includes(i)){
           updateList.push(i) 
        }
    }
    return updateList
}

console.log(removeDuplicate([2,3,1,2,3,4,5,4,1,1,2]));
