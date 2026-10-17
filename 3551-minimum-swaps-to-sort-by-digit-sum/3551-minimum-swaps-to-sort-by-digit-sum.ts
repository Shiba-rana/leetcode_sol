function minSwaps(nums: number[]): number {
    const n = nums.length;

    const getDigitSum = (num) => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    const elements = nums.map((val, idx) => ({
        val,
        digitSum: getDigitSum(val),
        originalIdx: idx
    }));

    elements.sort((a, b) => {
        if (a.digitSum !== b.digitSum) {
            return a.digitSum - b.digitSum;
        }
        return a.val - b.val;
    });

    const visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || elements[i].originalIdx === i) {
            continue;
        }

        let cycleSize = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = elements[j].originalIdx;
            cycleSize++;
        }

        if (cycleSize > 0) {
            swaps += (cycleSize - 1);
        }
    }

    return swaps;
};