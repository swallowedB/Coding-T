function solution(my_string, n) {
    let result = '';
    my_string.split('').forEach((char) => {
        for(let i = n; i > 0; i--){
            result += char
        }      
    })
    return result;
}