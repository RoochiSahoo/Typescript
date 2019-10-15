//declare a tuple type
let x:[string,number];
//initialise it
x=["hello",10];//ok
//initalise it incorrectly
//x=[10,"hello"];//error
console.log(x)
console.log(x[1])
//for loop
for(let i=0;i<x.length;i++)
{
    console.log(x[i]);
}
//for each
x.forEach(element => {
 console.log(element);   
});
//for...in loop
for(let e in x) 
{
    console.log(x);
}
for(let e of x)
{
    console.log(x);
}