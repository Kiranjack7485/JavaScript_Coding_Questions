function isAnagram(st1,st2){
    let str1 = st1.toLowerCase().split('').sort().join('');
    let str2 = st2.toLowerCase().split('').sort().join('');
    return str1 === str2;
}

function anagramArr (myArr){
    let newArr = [];
    for (let i=0;i<myArr.length;i++){
        for (let j=i+1;j<myArr.length;j++){
            if(isAnagram(myArr[i],myArr[j])){
                newArr.push(myArr[i],myArr[j])
            }
        }
    }
    return newArr;
}

console.log(anagramArr(["cat","Cut", "Act", "Left", "felt"]));
