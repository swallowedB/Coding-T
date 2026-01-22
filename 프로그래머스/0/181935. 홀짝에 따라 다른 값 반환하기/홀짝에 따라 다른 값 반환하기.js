function solution(n) {
    let result = 0;
    
    for(let i=n; i > 0; i--){
        if(n % 2 === 0){
            if(i % 2 === 0){
                result += i**2
            }
        }else{
            if( i % 2 !== 0){
                result += i
            }
        }
    }
    return result;
}