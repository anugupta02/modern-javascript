 function name() {
  var name = 'Anu Gupta'; // name is a local variable created by name function
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}

name();

var a = 10;
function firstFunc() {
    var b = 20;
    function secondFunc () {
        var c = a+b;
        return c;
    }
    return secondFunc();
}
