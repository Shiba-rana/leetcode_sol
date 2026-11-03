function minMoves(nums: number[]): number {
    let maxVal = -Infinity;
    let sum = 0;
    
    for (const num of nums) {
        if (num > maxVal) {
            maxVal = num;
        }
        sum += num;
    }

    return (maxVal * nums.length) - sum;
};