function isPalindrome(x: number): boolean {
    let num_list: number[] = [];
    let y = x;
    while (y != 0) {
        let next = y % 10;
        if (next < 0) return false;
        num_list.push(next);
        y = Math.floor(y / 10);
    }
    while (num_list.length > 0) {
        y = y * 10 + num_list.shift();
    }

    return (x === y);
};