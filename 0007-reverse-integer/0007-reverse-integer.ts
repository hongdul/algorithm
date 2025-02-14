function reverse(x: number): number {
    let sign = 1;
    let num_limit = 2**31;
    let num_list: number[] = x.toString().split('').map(Number);
    if (isNaN(num_list[0])) {
        sign = -1;
        num_list = num_list.slice(1);
    }
    let num = parseInt(num_list.reverse().join('')) * sign;
    
    return num > num_limit - 1 || num < -(num_limit) ? 0 : num;
};