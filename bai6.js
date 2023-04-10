function checkString(strs) {
    if (!strs.length) {
        return '';
      }
    let res = ''
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++)
            // console.log(strs[i])
            if (i == j.length-1 || strs[j][i] != strs[0][i])
                return res;
        res += strs[0][i];
    }
    return res
}
var strs = ["flower","flow","flight"];
var k = checkString(strs);
console.log(k);