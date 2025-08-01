/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let answer = "/";
    let pathArr = path.split("/").filter((it) => it !== '');
    let i = 0;
    while (i < pathArr.length) {
        switch (pathArr[i]) {
            case ".": 
                pathArr.splice(i, 1);
                break;
            case "..":
                if (i !== 0) {
                    pathArr.splice(i - 1, 2);
                    i--;
                } else {
                    pathArr.splice(i, 1);
                }
                break;
            default: 
                i++;
                break;
        }
    }
    return pathArr.reduce((acc, cur) => {
        acc += `/${cur}`;
        return acc;
    }, "") || "/";



// gpt - 스택 기반 풀이
    // let stack = [];
    // for (const part of path.split("/")) {
    // if (part === "" || part === ".") continue;
    // if (part === "..") stack.pop();
    // else stack.push(part);
    // }

    // return "/" + stack.join("/");
};