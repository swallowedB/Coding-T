function solution(n) {
    const binaryN1 = n.toString(2).replaceAll('0','').length;
    let binaryNext1 = 0
    for(let i = n+1; ; i++){
        binaryNext1 = i.toString(2).replaceAll('0','').length;
        if(binaryN1 === binaryNext1){
            return i
        }
    }    
}