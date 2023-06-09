console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let int = 0; int < 100; int++) {
    if (int % 2 != 0)
        console.log(int);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let int = 0; int < 100; int++) {
    if (int % 3 == 0)
        console.log("FIZZ");
    if (int % 5 == 0)
        console.log("BUZZ");
    if ((int % 5 == 0) && (int % 3 == 0))
        console.log("FIZZBUZZ");
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let num = 1;

while (num <= 100) {
    if (num % 2 != 0)
        console.log(num);

    num++;
}

num = 1;

do {
    if (num % 2 != 0)
        console.log(num);

    num++;
} while (num <= 100)


num = 1;

while (num <= 100) {
    if (num % 3 == 0)
        console.log("FIZZ");
    if (num % 5 == 0)
        console.log("BUZZ");
    if ((num % 5 == 0) && (num % 3 == 0))
        console.log("FIZZBUZZ");

    num++;
}

do {
    if (num % 3 == 0)
        console.log("FIZZ");
    if (num % 5 == 0)
        console.log("BUZZ");
    if ((num % 5 == 0) && (num % 3 == 0))
        console.log("FIZZBUZZ");

    num++;
} while (num <= 100)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let int = 0; int <= n; int++) {

    if (int = value) {
        console.log("Found value!");
        break;
    }

    if (int == n)
        console.log("Did not find value");

}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let int = start; int <= n; int++) {
    if (int % fizzDivisor == 0)
        console.log("FIZZ");
    if (int % buzzDivisor == 0)
        console.log("BUZZ");
    if ((int % buzzDivisor == 0) && (int % fizzDivisor == 0))
        console.log("FIZZBUZZ");
}