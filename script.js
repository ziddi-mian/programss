// Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday.   
// Example : 42 (the 42nd week in the year)
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(ISO8601_week_no(dt));
// 44

function ISO8601_week_no(dt) 
  {
     var tdt = new Date(dt.valueOf());
     var dayn = (dt.getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4) 
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
        }

dt = new Date();
console.log(ISO8601_week_no(dt));

dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));


// Write a JavaScript function to get a full textual representation of a month, such as January or June.   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(full_month(dt));
// "November"


Date.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function full_month(dt)
  { 
   return Date.longMonths[dt.getMonth()]; 
  }

dt = new Date(); 
console.log(full_month(dt)); 

dt = new Date(2015, 10, 1); 
console.log(full_month(dt));


// Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(numeric_month(dt));
// "11"

function numeric_month(dt)
{
  return (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1); 
}
dt = new Date(); 
console.log(numeric_month(dt)); 

dt = new Date(2015, 10, 1); 
console.log(numeric_month(dt));
















