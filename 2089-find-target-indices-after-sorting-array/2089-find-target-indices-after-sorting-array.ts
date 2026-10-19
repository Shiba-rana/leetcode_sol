function targetIndices(nums: number[], target: number): number[] {
    let lessThanTarget = 0;
    let equalToTarget = 0;

    for(const num of nums) {
        if(num < target) {
            lessThanTarget++
        } else if(num === target) {
            equalToTarget++
        }
    }

    const ans = []
    for(let i = 0; i < equalToTarget; i++) {
        ans.push(lessThanTarget++)
    }
    return ans
    
};