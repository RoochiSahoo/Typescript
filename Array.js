var numArr = [10, 20, 30, 40];
var cities = ["Mumbai", "Pune", "Delhi"];
console.log("the number array " + numArr);
console.log("the array of string " + cities);
var list = [1, 2, 3];
console.log(list);
for (var i = 0; i < list.length; i++) {
    console.log("using for loop");
    console.log(list[i]);
}
console.log("using for each loop");
cities.forEach(function (ele) {
    console.log(ele);
});
//using for..in loop
for (var e in cities) {
    console.log(cities[e]);
}
//using for..of loop
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var e = cities_1[_i];
    console.log(e);
}
