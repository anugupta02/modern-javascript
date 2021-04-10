function Anu(name, ...career) {
    this.name = name;
    return Array.isArray(career) === true && typeof career === "object" ? {} : "";
}
var student = new Anu("Anu Gupta");
console.log(student.name);
