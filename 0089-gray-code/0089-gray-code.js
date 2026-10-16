/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const totalNumbers = 1 << n;
    const result = [];

    for (let i = 0; i < totalNumbers; i++) {
        result.push(i ^ (i >> 1));
    }
    
    return result;
};