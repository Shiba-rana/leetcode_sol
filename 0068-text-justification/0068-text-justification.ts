function fullJustify(words: string[], maxWidth: number): string[] {
    let result = [];
    let i = 0;

    while (i < words.length) {
        let lineLen = words[i].length;
        let j = i + 1;

        while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {
            lineLen += 1 + words[j].length;
            j++;
        }

        let gaps = j - i - 1;
        let line = "";

        if (j === words.length || gaps === 0) {
            for (let k = i; k < j; k++) {
                line += words[k];
                if (k < j - 1) line += " ";
            }
            while (line.length < maxWidth) line += " ";
        } else {
            let totalSpaces = maxWidth - (lineLen - gaps);
            let spacePerGap = Math.floor(totalSpaces / gaps);
            let extraSpaces = totalSpaces % gaps;

            for (let k = i; k < j; k++) {
                line += words[k];
                if (k < j - 1) {
                    let spacesToApply = spacePerGap + (extraSpaces-- > 0 ? 1 : 0);
                    line += " ".repeat(spacesToApply);
                }
            }
        }

        result.push(line);
        i = j;
    }

    return result;
};