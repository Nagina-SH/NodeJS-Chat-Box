var moment = require('moment');

var date = moment(); 
var dateFormat = date.format('h:mm a');

console.log(dateFormat);


var someTimestamp = moment().valueOf();
console.log(someTimestamp);