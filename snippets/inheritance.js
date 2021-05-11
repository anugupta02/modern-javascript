function animal(name, age) {
    this.name = name;
    this.age = age;
}

animal.prototype.canRun = function () {
    console.log("yes " + this.name + " " + this.age + " can run !");
};

var dog = new animal("foo", 5);
dog.canRun();

var cat = new animal("koo", 3);
cat.canRun();
function human(name, age, money) {
    animal.call(this, name, age);
    this.money = money;
}

human.prototype = Object.create(animal.prototype);

human.prototype.canEarn = function () {
    console.log("yes " + this.name + " " + "can earn");
};

var h1 = new human("anu", 23, "2000 ");
h1.canRun();
h1.canEarn();
