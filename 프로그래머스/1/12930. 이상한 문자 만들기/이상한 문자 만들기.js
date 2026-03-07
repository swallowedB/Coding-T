function solution(s) {
    let strArr = s.split(" ");
    let result = [];
    
    strArr.map((str) => {
        let transChars = [];
        
        for(let i=0; i<=str.length-1; i++){
            if(i % 2 === 0){
                transChars.push(str[i].toUpperCase())
            } else {
                transChars.push(str[i].toLowerCase())
            }
        }
        result.push(transChars.join(""))
    })
    
    return result.join(" ")
}