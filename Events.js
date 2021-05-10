// Create and trigger custom event

const events = require("events");
const event = new events.EventEmitter();

event.on("click1", () => console.log("First event created"));
event.emit("click1");

event.on("click2", (name) => console.log("Name: " + name));
event.emit("click2", "Tanmay Patel");

event.on("click3", (a, b) => {
  c = a + b;
  console.log("A + B : " + c);
});
event.emit("click3", 22, 30);

// Create second event in first event

const first_event = function (n1, n2) {
  console.log("First Event Triggerd");
  console.log("A + B :", n1 + n2);
  event.emit("clickSecondEvent");  
};

const second_event = function () {
  console.log("Second Event Triggerd");
};

event.on("clickFirstEvent", first_event);
event.on("clickSecondEvent", second_event);
event.emit("clickFirstEvent", 68, 53);
