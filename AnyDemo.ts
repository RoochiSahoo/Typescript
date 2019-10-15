let notsure: any=4;
console.log(notsure);//4
notsure="may be later";
console.log(notsure);//may be later
notsure=false;
console.log(notsure);//false
let arr:any[]=[1,"ruchi",false];
console.log(arr);
// using for loop
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
//using for each loop
arr.forEach(element => {
    console.log(element);
    
});
//using for in loop
for(let e in arr)
{
    console.log(arr[e]);
}
