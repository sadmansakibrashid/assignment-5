1.The difference between var, let, and const is that they used to declare variables, but they behave differently.var is the older way to declare variables. It has function scope, which means if you declare it inside a function it only works there, but inside blocks like if or for it can still be accessed outside. Because of this it can sometimes create unexpected problems.
let was introduced in ES6. It has block scope, so it only works inside the block {} where it is declared. Another difference is that the value of a let variable can be changed later.
const is also block scoped like let, but the difference is that its value cannot be reassigned after it is declared. That means once you give it a value, it should stay the same.

2.The spread operator (...) is used to expand or copy elements from an array or object.exm:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
Here ...numbers spreads the values of the array into the new array.

3.The different between map(),filter() and forEach():
map() is used when we want to create a new array by modifying each element of the original array.
Example: multiplying each number by 2.
filter() is used when we want to select some elements from an array based on a condition.
Example: getting only numbers greater than 10.
forEach() is used to loop through an array and perform an action, but it does not return a new array.

4.Arrow function:An arrow function is a shorter way to write a function in JavaScript. It was introduced in ES6 and makes the code cleaner and easier to read.Here an example:
const add = (a, b) => {
  return a + b;
};

5.Template literals:Template literals are a way to write strings in JavaScript more easily.
Instead of using single quotes ' ' or double quotes " ", we use backticks ``.They make it easier to add variables inside a string.Normally writing multiple lines is difficult but with template literals we can write it.also we can use ${} to insert variable dynamically in here.