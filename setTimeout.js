//ex:-1 setTimeout
function sayHi() {
    alert('Hello');
   }
   setTimeout(sayHi, 1000); 
   //ex:-2
   function greet(phrase, name) {
     alert(${phrase}, ${name});
   }
   setTimeout(greet, 1000, "Hello", "John"); // "Hello, John" after 1 second
  
