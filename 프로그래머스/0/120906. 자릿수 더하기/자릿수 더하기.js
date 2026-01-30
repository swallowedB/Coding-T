function solution(n) {
    let toStr = n.toString()
    const result = toStr.split('').reduce((acc, cur) => {
        return acc + Number(cur)
    },0)
    
    return result;
}