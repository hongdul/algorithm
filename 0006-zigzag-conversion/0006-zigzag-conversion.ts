function convert(s: string, numRows: number): string {
    let int_arr: string[][] = [];
    for (let i = 0; i < numRows; i++) {
        int_arr.push([]);
    }

    let index = 0;
    while (index < s.length) {
        for (let i = 0; i < numRows && s; i++) {
            int_arr[i].push(s[index]);
            index++;
        }
        for (let i = numRows - 2; i > 0 && s; i--) {
            int_arr[i].push(s[index]);
            index++;
        }
    }
    return int_arr.map((arr) => arr.join('')).join('');
};