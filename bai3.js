var s = "";
var res = "";
var ans = 1;
s = prompt("Enter a string:");
var n = s.length;
for (let i = 0; i < n; i++) {
res += s[i];
for (let j = i + 1; j < n; j++) {
if (res.indexOf(s[j]) !== -1) {
ans = Math.max(ans, res.length);
res = "";
break;
} else {
res += s[j];
}
}
}
console.log(ans);