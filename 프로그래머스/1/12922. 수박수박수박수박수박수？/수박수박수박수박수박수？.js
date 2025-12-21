function solution(n) {
    let result = "";
    let flag = 0;
    for(let i = n; i >0; i--){
        if(flag === 0){
            result += "수"
            flag = 1;
        } else {
            result += "박"
            flag = 0;
        }
    }
    return result;
}