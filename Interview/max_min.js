const people = [1,2,3,4,5];

const max = people.reduce((a, b) => Math.max(a, b)); //5

const min = people.reduce((a, b) => Math.min(a, b)); //1

const sum = people.reduce((a, b) => a+b, 0);  //15

const ceil = Math.ceil(people);

const floor = Math.floor(people);

const avg = people.reduce((a, b) => (a + b)) / people.length;

console.log("max",max)
// console.log("min",min)
 console.log("sum",sum)
// console.log("avg",avg)
// console.log("ceil",ceil)
// console.log("floor",floor)

numbers =[12, 10, 15, 11, 14, 13, 16];

console.log("numbers",numbers);
function bubbleSort(numbers) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < numbers.length; i += 1) {
            if (numbers[i - 1] > numbers[i]) {
                done = false;
                let tmp = numbers[i - 1];
                numbers[i - 1] = numbers[i];
                numbers[i] = tmp;
            }
        }
    }
    return numbers;
}

console.log("ascOrder",bubbleSort(numbers));
