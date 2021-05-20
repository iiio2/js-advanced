// Destructuring

const array = ['A', 'B', 'C', 'D'];
const person = {
  name: 'kyle',
  age: 25,
  favoriteFood: 'Rice',
  address: {
    street: '23 Main St',
    city: 'Somewhere',
  },
};

function addAndMultiply(a, b) {
  return [a + b, a * b];
}

// the function returns the "Array";
const [sum, product] = addAndMultiply(2, 3);
console.log(sum, product);

const [first, second, third] = array;
console.log(first, second, third);

const { name: firstName, age } = person;
console.log(firstName, age);

const {
  address: { street, city },
} = person;

console.log(street, city);

function myName(fullName) {
  return fullName.split(' ');
}

const [myFirstName, lastName] = myName('Kyle Cook');

console.log(myFirstName, lastName);

function newAddAndMiltiply({ a, b }) {
  return [a + b, a * b];
}

const [myFirst, mySecond] = newAddAndMiltiply({ a: 2, b: 3 });

console.log(myFirst, mySecond);
