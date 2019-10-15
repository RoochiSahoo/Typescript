var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rollNo = rollno;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log(this.rollNo + "  " + this.name);
    };
    return Student;
}());
var obj = new Student(12, "chetan");
obj.display();
var obj2 = new Student(13, "sahuu");
obj2.display();
//console.log(obj2.rollNo);error when rollno. is private
