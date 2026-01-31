function solution(n, control) {
    const result = control.split('').reduce((acc, cur) => {
       if(cur === "w"){
           return acc + 1
       } else if (cur === "s"){
           return acc - 1
       } else if (cur === "d"){
           return acc + 10
       } else {
           return acc -10
       }
    },n)
    return result;
}