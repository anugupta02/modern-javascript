var name = "Anu";
console.log("Line number 2", name);

function sayName() {
  var name = "Miss. A";
  console.log("Line number 6", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Miss. AG";
    console.log("Line number 11", name);
  }
}

sayName();
