// Prototype is used toadd additional functionality (Like Inheritance).

function student() {
  this.name = "Tanmay Patel";
  this.age = 24;
}
var stdnt1 = new student();
console.log(stdnt1);

student.prototype = {
  address: "Gujarat",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

var stdnt2 = new student();
console.log(stdnt2.getName());
