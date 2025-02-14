function reverse(x: number): number {
    let sign = x > 0 ? 1 : -1;
    let num_limit = Math.pow(2, 31);
    let x_abs = Math.abs(x);
    let num = parseInt(x_abs.toString().split('').reverse().join('')) * sign;
    return num > num_limit - 1 || num < -(num_limit) ? 0 : num;
};