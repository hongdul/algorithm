function convert(s: string, numRows: number): string {
    let int_arr: string[][] = [];
    for (let i = 0; i < numRows; i++) {
        int_arr.push([]);
    }

     while (s) {
        for (let i = 0; i < numRows && s; i++) {
            int_arr[i].push(s[0]);
            s = s.slice(1);
        }
        for (let i = numRows - 2; i > 0 && s; i--) {
            int_arr[i].push(s[0]);
            s = s.slice(1);
        }
    }
    return int_arr.map((arr) => arr.join('')).join('');
};