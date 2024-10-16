//ex:1-setIntrval

let timerId = setInterval(() => alert('Tick'), 2000); // Alerts every 2 seconds
setTimeout(() => clearInterval(timerId), 5000); // Stops after 5 seconds

//ex:2-setIntrval
let student = setInterval(() => alert('Hi'),3000);
setTimeout(() => clearInterval(student),5000);