// Anonymous function

var person = function (a, b) {
  console.log("This is anonymous function");
  var c = a + b;
  console.log("a + b : " + c);
};
person(4, 5);

// Arrow function
var users = () => console.log("This is arrow function");
users();

var add = (a,b) => {
  c = a + b;
  console.log("a + b : " + c);
}
add(3,6);
