function solution(x, n) {
    let result = [x];
    for(let i=n; i>1; i--){
        const num = result[result.length-1] + x
        result.push(num)
    }
    return result;
}