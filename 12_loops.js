// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

const states = [
  "Uttar Pradesh",
  "Dehradun",
  "Karnataka",
  2000,
  "Telangana",
  "Gujarat",
];

for (let j = 0; j < states.length; j++) {
  if (typeof states[j] !== "string") break;
  console.log(states[j]);
}

let i=0;
while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}

let y = 20;

do {
  console.log(y);
  y++;
} while (y < 10);
