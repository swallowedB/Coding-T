function solution(participant, completion) {
    const freq = new Map();
    
    for(const p of participant){
        freq.set(p, (freq.get(p) ?? 0) +1)
    }
    
    for(const c of completion){
        const next = freq.get(c) -1
        if(next === 0) freq.delete(c)
        else freq.set(c, next)
    }
    
    return freq.keys().next().value
}