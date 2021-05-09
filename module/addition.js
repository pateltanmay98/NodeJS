function add() {
  console.log("This is addition module");
}

module.exports.addition = add;

function sub() {
  return "This is subtraction module";
}

module.exports.subtraction = sub;

var a = 22;

module.exports.aval = a;