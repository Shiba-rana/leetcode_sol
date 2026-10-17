class Solution {
    public int minSwaps(int[] nums) {
        int n = nums.length;

        int[][] elms = new int[n][2];
        for(int i = 0; i < n; i++) {
            elms[i][0] = nums[i];
            elms[i][1] = i;

        }

        Arrays.sort(elms, (a,b) -> {
            int sumA = getDigitSum(a[0]);
            int sumB = getDigitSum(b[0]);
            if(sumA != sumB) {
                return Integer.compare(sumA, sumB);
            }
            return Integer.compare(a[0], b[0]);
        });

        boolean[] visited = new boolean[n];
        int swaps = 0;

        for(int i = 0; i < n; i++) {
            if(visited[i] || elms[i][1] == i) {
                continue;
            }

            int cycleSize = 0;
            int j = i;

            while(!visited[j]) {
                visited[j] = true;
                j = elms[j][1];
                cycleSize++;
            }

            if (cycleSize > 0) {
                swaps += (cycleSize - 1);
            }
        }
        return swaps;
    }

    private int getDigitSum(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }
}