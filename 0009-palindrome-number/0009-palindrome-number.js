/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    x = x.toString();
    return x == x.split('').reverse().join('');
    // const len = x.length;
    // const isOdd = len % 2 != 0;

    // if (isOdd) return calcPalindrome(Math.floor(len / 2), isOdd);
    // return calcPalindrome(len / 2 - 1, isOdd);

    // function calcPalindrome(mid, isOdd) {
    //     if (isOdd) {
    //         for (let i = 1; i <= mid; i++) {
    //             if (x[mid - i] == x[mid + i]) continue;
    //             return false;
    //         }
    //         return true;
    //     }

    //     let mid2 = mid + 1;
    //     for (let i = 0; i <= mid; i++) {
    //         if (x[mid - i] == x[mid2 + i]) continue;
    //         return false;
    //     }
    //     return true;
    // }
};
