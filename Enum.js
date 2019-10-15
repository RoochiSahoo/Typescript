var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
//console.log(Color);
//console.log(c);//print index
var month;
(function (month) {
    month[month["jan"] = 0] = "jan";
    month[month["feb"] = 1] = "feb";
    month[month["march"] = 2] = "march";
})(month || (month = {}));
var monthName = month[2];
console.log(monthName); //Displays march as it is on index 2
for (var e in Color) {
    console.log(Color[e]);
}
