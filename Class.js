class Users {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

var user = new Users("Tanmay Patel", 24);
console.log(user);
console.log("User name: " + user.getName());
console.log("User age: " + user.getAge());
