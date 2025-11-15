function solution(num_list) {
    let arr = [0, 0]
    num_list.forEach((num) => {
        if(num % 2 === 0){
            arr[0] += 1
        } else{
            arr[1] += 1
        }
    })
    return arr
}