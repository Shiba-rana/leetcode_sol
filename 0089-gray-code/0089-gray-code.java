class Solution {
    public List<Integer> grayCode(int n) {
        int totalNums = 1 << n;
        List<Integer> result = new ArrayList<>(totalNums);

        for (int i = 0; i < totalNums; i++) {
            result.add(i ^ (i >> 1));
        }
        
        return result;
    }
}