function solution(s) {
    let currentStr = s;
    let deleteCount = 0;
    let binaryCount = 0;
    
    while(currentStr !== '1'){
        let binary = ''
        const deleteZero = currentStr.replaceAll('0','');
        deleteCount += currentStr.length - deleteZero.length
        const len = deleteZero.length
        currentStr = len.toString(2);
        binaryCount += 1;
    }
    return [binaryCount, deleteCount]
}