// Example data
const aob = [ { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' }]

let framework = 0;
for (let i = 0; i < aob.length; i++) {
    if (aob[i].framework === '0') framework++;
}

console.log("framework",framework);

const superAob = (data, victim) => {    const obj = {};
    data.forEach((data) => {
        if(data.hasOwnProperty(victim)){
            if(obj[data[victim]]){  obj[data[victim]]++; }
            else{  obj[data[victim]] = 1; }
        }
    })
  
    let superArrayOfObjects = [];
   for (const key in obj) {
        superArrayOfObjects = [...superArrayOfObjects, { victim: key, count: obj[key]}];
    }
   return superArrayOfObjects;
}
console.log(superAob(aob, 'framework'));

// output:-
// [
//     { victim: 'React.JS', count: 2 },
//     { victim: 'Angular', count: 1 },
//     { victim: 'Vue.JS', count: 1 },
//     { victim: 'JavaScript', count: 1 }
// ]
