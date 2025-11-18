function solution(phone_number) {
    let privacy = []
    phone_number.slice(0, phone_number.length-4).split('').forEach((num) => privacy.push('*'))
     privacy.push(phone_number.slice(phone_number.length-4, phone_number.length))
    
    
    return privacy.join('');
}