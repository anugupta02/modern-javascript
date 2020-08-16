var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

//console.log(states[1]);

//console.log(states.length);
states[0] = "Uttar Pradesh";
//console.log(states);

var user = ["anu", "anu@gmail.com", 3, 22, true];
//console.log(user);

user.pop();
user.pop();
//console.log(user);
user.unshift("NEW VALUE");
//console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("newy"));

console.log(Array.from("anu"));
