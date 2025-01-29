function reverseStr (st){
    let st2 = "";
    for (let i of st){
        st2 = i + st2
    }
    return st2
}

console.log(reverseStr("JavaScript Online"));
