//note: month is 0 based, just like Dates in js
function getWeeksInMonth(month, year){
  var weeks=[],
      firstDate=new Date(year, month, 1),
      lastDate=new Date(year, month+1, 0),
      numDays= lastDate.getDate();

  var start=1;
  var end=7-firstDate.getDay();
  while(start<=numDays){
    weeks.push({start:start,end:end});
    start = end + 1;
    end = end + 7;
    if(end>numDays)
      end=numDays;
  }
  console.log("weeks : ",weeks);
}

getWeeksInMonth(3,2021)
