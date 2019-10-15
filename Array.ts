let numArr:number[]=[10,20,30,40];
let cities:Array<String>=["Mumbai","Pune","Delhi"];
console.log("the number array "+numArr);
console.log("the array of string "+cities);
let list:number[]=[1,2,3];
console.log(list);
for(let i=0;i<list.length;i++)
{
    console.log("using for loop");
    console.log(list[i]);
}

console.log("using for each loop");
//lambda expression
//arrow sign
cities.forEach(ele=>{
    console.log(ele);
});
//using for..in loop
for(let e in cities)
{
    console.log(cities[e]);
}
//using for..of loop
for(let e of cities)
{
    console.log(e);
}