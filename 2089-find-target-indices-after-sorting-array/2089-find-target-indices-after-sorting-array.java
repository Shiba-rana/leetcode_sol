class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        int lessThanTarget = 0;
        int equalToTarget = 0;

        for(int num : nums) {
            if(num < target) {
                lessThanTarget++;
            } else if(num == target) {
                equalToTarget++;
            }
        }

        List<Integer> ans = new ArrayList<>();
        for(int i = 0; i < equalToTarget; i++) {
            ans.add(lessThanTarget++);
        }

        return ans;
    }
}