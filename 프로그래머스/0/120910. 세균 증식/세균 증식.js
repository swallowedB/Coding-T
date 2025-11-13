function solution(n, t) {
    let result = n;
    for(let i=t; i>0; i--){
        result *= 2
    }
    return result;
}