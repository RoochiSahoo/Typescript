enum Color {Red=2,Blue,Green}
let c: Color=Color.Green;
//console.log(Color);
//console.log(c);//print index
enum month {jan,feb,march}
let monthName:string=month[2];
console.log(monthName);//Displays march as it is on index 2

for(let e in Color)
{
    console.log(Color[e]);
} 
