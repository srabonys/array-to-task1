/*4. Checking if it's an Array
Instructions:

1.Create different variables, each containing either an array or a non-array value.

2.Now use isArray to check if each variable is an array.

3.Print a message to the console indicating whether each variable is an array or not.

--------------*/

const food =['puchka' , 'ice-crem', 'shorma'];
const age = (23, 12, 8, 14);
const colours = 'bule,black,white';

console.log(Array.isArray(food));
console.log(Array.isArray(age));

Array.isArray(colours) ? console.log("Array") : console.log("Not Array");

//output
 /*true
false
Not Array*/