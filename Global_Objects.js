// __dirname,
// __filename,
// require,
// console,
// buffer,
// module,
// exports

// Print directory name
console.log(__dirname)

// Print file name
console.log(__filename)

// If you need any other file, we use require object
var main = require('./main')

// Buuer is used to allocate temporary memory

// The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module. 
// e.g. module.exports.name = "Tanmay";

// Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application. 
// e.g. console.log(main.name);