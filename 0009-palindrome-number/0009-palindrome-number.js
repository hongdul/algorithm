/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
// 1. 문자열 뒤집기
    if (x < 0) return false;

    x = x.toString();
    return x == x.split('').reverse().join('');

// 2. 중앙 확장
    // const len = x.length;
    // const isOdd = len % 2 != 0;

    // if (isOdd) return calcPalindrome(Math.floor(len / 2), isOdd);
    // return calcPalindrome(len / 2 - 1, isOdd);

    // function calcPalindrome(mid, isOdd) {
    //     if (isOdd) {
    //         for (let i = 1; i <= mid; i++) {
    //             if (x[mid - i] === x[mid + i]) continue;
    //             return false;
    //         }
    //         return true;
    //     }

    //     let mid2 = mid + 1;
    //     for (let i = 0; i <= mid; i++) {
    //         if (x[mid - i] === x[mid2 + i]) continue;
    //         return false;
    //     }
    //     return true;
    // }

// 3. 정수 기반 뒤집기
    // if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    // let reverted = 0;
    // while (x > reverted) {
    //     reverted = reverted * 10 + x % 10;
    //     x = Math.floor(x / 10);
    // }

    // // 숫자 길이가 홀수면 가운데 수는 무시
    // return x === reverted || x === Math.floor(reverted / 10);
};
