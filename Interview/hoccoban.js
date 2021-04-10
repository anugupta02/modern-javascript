const youtube = { name: "hoccoban" };
const copy = Object.create(youtube);
const cloneA = Object.assign({}, copy);
const cloneB = Object.assign({}, youtube);

console.log(cloneA.name);
console.log(cloneB.name);
console.log(copy.name);
