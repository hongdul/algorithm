function myAtoi(s: string): number {
    const result = parseInt(s) || 0;
    if (result > 2**31 - 1) {
        return 2**31 - 1;
    } else if (result < -(2**31)) {
        return -(2**31);
    } else {
        return result;
    }
};