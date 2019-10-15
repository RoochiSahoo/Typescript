var notsure = 4;
console.log(notsure); //4
notsure = "may be later";
console.log(notsure); //may be later
notsure = false;
console.log(notsure); //false
var arr = [1, "ruchi", false];
console.log(arr);
// using for loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//using for each loop
arr.forEach(function (element) {
    console.log(element);
});
//using for in loop
for (var e in arr) {
    console.log(e);
}
