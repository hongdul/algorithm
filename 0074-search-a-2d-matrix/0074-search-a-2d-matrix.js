/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 1) return matrix[0].includes(target);

    let m = matrix.length - 1;
    let n = matrix[0].length - 1;
    
    let left = 0;
    let mid = Math.floor((left + m) / 2);
    while (left < m) {
        console.log(mid, left,  m);

        if (matrix[mid][0] > target) {
            m = mid;
        } else if (matrix[mid][0] < target) {
            if (matrix[mid + 1][0] === target) return true;
            if (matrix[mid + 1][0] > target) break;
            left = mid + 1;
        } 
        mid = Math.floor((left + m) / 2);
        console.log(mid, left,  m);
        if (matrix[mid][0] === target) return true;        
    }
    left = 0;
    m = mid;
    mid = Math.floor(n / 2);
    while (left < n) {
        if (matrix[m][mid] > target) {
            n = mid - 1;
        } else if (matrix[m][mid] < target) {
            left = mid + 1;
        } else return true;
        mid = Math.floor((left + n) / 2);
        if (matrix[m][mid] === target) return true;        
    }
    return false;
};