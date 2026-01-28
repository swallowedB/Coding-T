function solution(s) {
    const numlist = ['1','2','3','4','5','6','7','8','9','0']
    if(s.length === 4 || s.length === 6){
        let check = s.split('').filter((char) => numlist.includes(char))
        if(check.length === s.length){
            return true
        }
        return false
    }
    return false
}