function solution(s1, s2) {
    let count = 0;
    
    s1.forEach((char) => {
       if(s2.includes(char)){
           count += 1
       }     
    })
    return count
}