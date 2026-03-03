function solution(num_list) {
    let result = [...num_list]
    const i = num_list.length-1
    if(num_list[i] > num_list[i-1]){
        result.push(num_list[i] - num_list[i-1])
    } else {
        result.push(num_list[i]*2)
    }
    return result;
}