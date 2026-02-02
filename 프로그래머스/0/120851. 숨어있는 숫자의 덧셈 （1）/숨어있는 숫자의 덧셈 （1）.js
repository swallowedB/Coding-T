function solution(my_string) {
    let sum = 0;
    for (const char of my_string) {
        if (char >= '0' && char <= '9') {
            sum += Number(char);
        }
    }
    return sum;
}