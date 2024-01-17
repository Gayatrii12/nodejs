const EventEmitter = require("events");
const customEmitter = new EventEmitter();
// on- listen for an event
// emit- emit an event

customEmitter.on("response", (name, id) => {
  console.log(`data recieved: ${name} with id:${id}`);
});
customEmitter.on("response", () => {
  console.log(`blah blah blah`);
});

customEmitter.emit("response", "john", 34);
