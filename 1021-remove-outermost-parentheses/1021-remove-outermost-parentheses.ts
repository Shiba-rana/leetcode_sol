function removeOuterParentheses(s: string): string {
    const result = [];
    let opened = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === '(') {
            if (opened > 0) {
                result.push(char);
            }
            opened++;
        } else {
            opened--;
            if (opened > 0) {
                result.push(char);
            }
        }
    }
    
    return result.join('');
};