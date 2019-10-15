class Student
{
 protected rollNo:number;
    name:string;
    constructor(rollno:number,name:string)
    {
        this.rollNo=rollno;
        this.name=name;
    }

   display():void{
        console.log(this.rollNo+"  "+this.name);
    }
}
let obj:Student=new Student(12,"chetan");
obj.display();
let obj2:Student=new Student(13,"sahuu");
obj2.display();
//console.log(obj2.rollNo);error when rollno. is private