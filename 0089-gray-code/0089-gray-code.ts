function grayCode(n: number): number[] {
    const totalNumbers = 1 << n;
    const result = [];

    for (let i = 0; i < totalNumbers; i++) {
        result.push(i ^ (i >> 1));
    }
    
    return result;
};