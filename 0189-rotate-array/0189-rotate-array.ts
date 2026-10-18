/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    if (!nums || nums.length <= 1) return;
    
    const n = nums.length;
    k = k % n;
    
    reverse(nums, 0, n - 1);
    
    reverse(nums, 0, k - 1);
    
    reverse(nums, k, n - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
};