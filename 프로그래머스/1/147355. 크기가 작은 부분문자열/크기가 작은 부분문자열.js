function solution(t, p) {
    let splitStr = [];
    for(let i=0; i<t.length; i++){
        let str = ''
        for(let j=0; j<p.length; j++){
            if(t.length > i+j){
                str += t[i+j]    
            }
        }
        if(str.length === p.length){
            splitStr.push(str)
        }
    }
    
    const result = splitStr.reduce((acc, cur) => {
        let num = Number(cur) <= Number(p) ? 1 : 0
        
        return acc += num
    },0)
    
    return result;
}