/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    const n = nums.length

    for(let i = 0; i < n; i++) {
        nums[i] = nums[i] * nums[i]
    }
    
    nums.sort((a , b) => a - b)

    let totalScore = 0n
    const minusSlotsCount = Math.floor(n / 2)

    for(let i = 0; i < n; i++) {
        if(i < minusSlotsCount) {
            totalScore -= BigInt(nums[i])
        } else {
            totalScore += BigInt(nums[i])
        }
    }
    return Number(totalScore)
};