 //program to check leap year
let year1=2013;
function checkLeapYear(year1){
    //three conditions to find out the leap year
    if((year%4==0) && (year%100 !==0) || (year%400==0)){ console.log(year1 + ' is a leap year');}
 else { console.log(year1 + ' is not a leap year'); }
}

// take input
checkLeapYear(year1);

 let year=2020;
function checkLeapYear(year) {
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) { console.log(year + ' is a leap year');}
    else { console.log(year + ' is not a leap year'); }
}

// take input
//console.log('Enter a year:');
checkLeapYear(year);

let years=2021;
function isLeap(years) {
     if ( (years % 4 === 0 && years % 100 !== 0) || (years % 4 === 0 && years % 100 === 0 && years % 400 === 0) ) {
         console.log('Leap year.');
     } else {
         console.log('Not leap year.');
     }
 }

 isLeap(years);
