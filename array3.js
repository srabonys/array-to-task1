/*3. Checking Array Membership with ‘includes’
Instructions:

1.Create an array of books containing different book.

2.Use the includes method to check if the array contains a javascript book.

3.Print a message to the console indicating whether the element is present in the array or not.
------------------------------*/

const books = ['h++' , 'html' , 'css' ,'java'];

console.log(books.includes('Java Script'));
books.includes('Java Script') ? console.log("it's here") : console.log("it's not");

/*false
it's not..........output*/