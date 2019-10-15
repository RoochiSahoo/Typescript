//declare a tuple type
var x;
//initialise it
x = ["hello", 10]; //ok
//initalise it incorrectly
//x=[10,"hello"];//error
console.log(x);
console.log(x[1]);
//for loop
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}
//for each
x.forEach(function (element) {
    console.log(element);
});
//for...in loop
for (var e in x) {
    console.log(x);
}
for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
    var e = x_1[_i];
    console.log(x);
}
