// Show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = true;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login option");
// }

//You can also implement the above lines in a pne single line as follows:

authenticated ? console.log("SignOut Button") : console.log("LOGIN");
