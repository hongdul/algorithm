function reverse(x: number): number {
    let sign = x > 0 ? 1 : -1;
    let x_abs = Math.abs(x);
    let num = parseInt(x_abs.toString().split('').reverse().join(''));
    return num * sign > 2**31 - 1 || num * sign < -(2**31) ? 0 : num * sign;
};