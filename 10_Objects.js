var user = {
  firstName: "Anu",
  lastName: "Gupta",
  role: "Admin",
  loginCount: 22,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
//user.loginCount = 44;
console.log(user.loginCount);
console.table(user);
