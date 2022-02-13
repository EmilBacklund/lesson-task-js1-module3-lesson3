// Question 1
const greet = (name) => `Hello ${name}!`;

const greeting = greet("Emil");
console.log(greeting);

const add = (a, b) => a + b;

const result = add(5, 5);
console.log(result);

// Question 2

fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
  .then((response) => {
    response.json();
    console.log(results.length);
  })
  .catch((error) => console.log(error));
