function getDivisors(num){
    const divisors = [];
    for(let i=1; i <= num/2; i++){
        if(num % i === 0) divisors.push(i);
    }
    return [...divisors, num];
}

function solution(left, right) {
    let nums = [];
    for(let i = left; i<= right; i++){
        const result = getDivisors(i)
    
        if(result.length % 2 === 0){
            nums.push(i)
        }else{
            nums.push(i * -1)
        }
    }
    return nums.reduce((acc, cur) => acc += cur, 0)
}