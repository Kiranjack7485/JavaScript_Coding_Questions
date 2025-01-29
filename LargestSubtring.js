function largestSubstring (str){
    let subArr = str.split(" ");
    let largeSub = "";
    for(let i of subArr){
        if(i.length > largeSub.length){
            largeSub = i
        }
    }
    return largeSub
}

console.log(largestSubstring("JavaScript Online Compiler"));
