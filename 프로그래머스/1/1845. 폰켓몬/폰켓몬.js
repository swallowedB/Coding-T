function solution(nums) {
    
    const uniquePokemon = new Set(nums);
    const maxSelected = nums.length/2;
    
    return Math.min(uniquePokemon.size, maxSelected);
}