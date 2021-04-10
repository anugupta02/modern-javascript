let age = { number: 10 };
const getAge = (flag) => {
    flag ? delete age.number : delete age;
    return age.number++;
};

console.log(getAge(false));

console.log(age.number);

console.log(getAge(true));

console.log(age.number);
