function solution(my_strings, parts) {
    let result = '';
    return my_strings.reduce((acc, str, i) => {
        const [s, e] = parts[i];
        return acc + str.slice(s, e + 1);
    },'')
}