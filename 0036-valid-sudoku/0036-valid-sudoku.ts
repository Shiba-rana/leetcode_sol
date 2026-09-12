function isValidSudoku(board: string[][]): boolean {
    const seen = new Set();
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const currentVal = board[i][j];
            
            if (currentVal !== '.') {
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                
                const rowKey = `${currentVal} in row ${i}`;
                const colKey = `${currentVal} in col ${j}`;
                const boxKey = `${currentVal} in box ${boxIndex}`;
                
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }
                
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
    }
    return true;
};