function reverse(x: number): number {
    let sign = 1;
    let num_list: number[] = x.toString().split('').map(Number);
    if (isNaN(num_list[0])) {
        sign = -1;
        num_list = num_list.slice(1);
    }
    let num = parseInt(num_list.reverse().join(''));
    
    return num * sign > 2**31 - 1 || num * sign < -(2**31) ? 0 : num * sign;
};