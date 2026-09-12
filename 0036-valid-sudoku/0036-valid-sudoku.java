class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<String> seen = new HashSet<>();

        for(int i = 0; i < 9; i++) {
            for(int j = 0; j < 9; j++) {
                char currVal = board[i][j];

                if(currVal != '.') {
                    int boxIdx = (i/3) * 3 + (j/3);

                     if (!seen.add(currVal + " in row " + i) ||
                        !seen.add(currVal + " in col " + j) ||
                        !seen.add(currVal + " in box " + boxIdx)) {
                        return false;
                    }
                }
            }
        } 
        return true;
    }
}