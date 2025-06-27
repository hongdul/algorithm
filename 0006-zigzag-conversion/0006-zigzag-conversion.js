/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var numArr = Array.from({ length: numRows }, () => []);
    var cycle = numRows * 2 - 2;
    if (cycle == 0) return s;
    
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        var index = i % cycle;

        if (index < numRows) numArr[index].push(char);
        else numArr[cycle - index].push(char);
    }

    return numArr.reduce((acc, arr) => {
        return acc + arr.join("");
    }, "");

/**
    for (var i = 0; i < cycle; i++) {

        if (i < numRows) {}
        
    }
*/

};