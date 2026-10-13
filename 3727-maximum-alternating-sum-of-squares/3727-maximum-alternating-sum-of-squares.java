class Solution {
    public long maxAlternatingSum(int[] nums) {
        int n = nums.length;
        
        for(int i = 0; i < n; i++) {
            nums[i] = nums[i] * nums[i];
        }
        Arrays.sort(nums);

        long totalScore = 0;
        int minusSlotsCount = n / 2;

        for(int i = 0; i < n; i++) {
            if(i < minusSlotsCount)   {
                totalScore -= nums[i];

            } else {
                totalScore += nums[i];
            }
        }
        return totalScore;
    }
}