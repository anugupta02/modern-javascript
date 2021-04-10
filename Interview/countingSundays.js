function isLeapYear(yearToCheck) {
    if(!(yearToCheck % 4)) {
        if(!(yearToCheck % 100)) {
            if(!(yearToCheck % 400)) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false;
    }
    return true;
}

console.log(isLeapYear(2024));

function daysInMonth(currentMonth, currentYear) {
    var currentDay = 0;
    var days = [31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var months = ["January", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    if(currentMonth === "February") {
        if(isLeapYear(currentYear)) {
            currentDay = 29;
        } else {
            currentDay = 28;
        }
    } else {
        currentDay = days[months.indexOf(currentMonth)]
    }
    return currentDay;
}
console.log(daysInMonth("April", 2021));

// If the current month has 30 days, it ends on the next day of the week after it started.  So, if it starts on a Monday, it will end on a Tuesday and the next month will start on a Wendesday
// If the current month has 31 days, it ends two days of the week later.  So, if it starts on a Monday, it will end on a Wednesday and the the next month will start on a Thursday.
// If the month has 28 days, it will end on the previous day of the week.  Monday to Sunday. Next month starts on Monday.
// If the month has 29 days, it will end on the same day.  Monday to Monday. Next month starts on Tuesday.

function startDayOfNextMonth(startDay, startMonth, startYear) {
    var nextMonthStartDay = "";
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var numOfDays = daysInMonth(startMonth, startYear);
    switch(numOfDays) {
        case 31:
            nextMonthStartDay = daysOfWeek[daysOfWeek.indexOf(startDay) + 3];
            break;
        case 30:
            nextMonthStartDay = daysOfWeek[daysOfWeek.indexOf(startDay) + 2];
            break;
        case 29:
            nextMonthStartDay = daysOfWeek[daysOfWeek.indexOf(startDay) + 1];
            break;
        case 28:
            nextMonthStartDay = daysOfWeek[daysOfWeek.indexOf(startDay)];
            break;
    }
    return nextMonthStartDay;
}

console.log(startDayOfNextMonth("Saturday", "May", 2021));

//After calculating with startDayOfNextMonth, I found out January 1, 1901 is a Tuesday. Confirmed with Google.

function countingFirstSundays(day1, month1, year1, month2, year2) {
    var numFirstSundays = 0;
    curDay = day1;
    curMonth = month1;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January"]
    for(var curYear = year1; curYear <= year2; curYear++) {
        for(var j = months.indexOf(curMonth); j <= months.indexOf("December"); j++) {
            if(curDay === "Sunday") {
                numFirstSundays++;
                curDay = startDayOfNextMonth(curDay, curMonth, curYear);
                curMonth = months[months.indexOf(curMonth) + 1];
            } else {
                curDay = startDayOfNextMonth(curDay, curMonth, curYear);
                curMonth = months[months.indexOf(curMonth) + 1];
            }
            if(curYear === year2 && curMonth === month2) {
                break;
            }
        }
    }
    return numFirstSundays;
}

console.log(countingFirstSundays("Tuesday", "January", 2021, "December", 2022));
