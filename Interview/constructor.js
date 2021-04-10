function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

var myFather = new Person("Rajeev", "Kumar", 62, "black");
var myMother = new Person("Jaishri", "Gupta", 56, "brown");

console.log("myFather",myFather)
console.log("myMother",myMother)
