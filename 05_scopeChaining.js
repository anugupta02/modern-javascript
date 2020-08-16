var name = "Anu";

console.log("Line number 3", name);

function sayName() {
  var name = "Miss. A";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Miss. AG";
    console.log("Line number 12", name);
  }
}

sayName();
