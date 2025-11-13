function solution(numbers) {
    const arr = numbers.sort((a,b) => b-a).slice(0,2);
    return arr[0] * arr[1]
}