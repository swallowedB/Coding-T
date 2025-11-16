function solution(n) {
    let result = 1;
    for(let i=n; i>= 1; i--){
        if(n % result !== 1){
            result += 1;
        } else {
            return result;
        }
    }
}