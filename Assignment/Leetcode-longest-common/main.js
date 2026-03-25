function longestCommonPrefix(strs) {
    let common = ''
    if (strs.length == 0) return common;
    strs.sort((a, b) => a.length - b.length);

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return common;
            }
        }
        common += strs[0][i]
    }
    return common

}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));