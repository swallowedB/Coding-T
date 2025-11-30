function solution(arr) {
    const minNum = Math.min(...arr)
    const result = arr.filter((num) => num !== minNum)
    result.length === 0 ? result.push(-1) : result
    return result
}