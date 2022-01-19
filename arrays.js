
//EXERCISE 1
//Part 1. There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

var peopleInBank = ["Sofia", "David", "Juan"];
console.log(peopleInBank);

//Part 2. Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

peopleInBank.push("Sara");
peopleInBank.push("Agustín");
peopleInBank.shift();

console.log(peopleInBank);

//Part 3. It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

peopleInBank.splice(1, 0, 'Renata');
peopleInBank.push("Elena");
console.log(peopleInBank);


//EXERCISE #2
//Write a JavaScript program to construct the following pattern, using a nested for loop.
for (var i = 1; i <= 5; i++){
    let star = "* ";
    console.log(star.repeat(i));
}

//EXERCISE #3
//Write while loops to do the following:

//Part 1. Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.

var xValue = 5;
while (xValue > 0){
    console.log(xValue);
    xValue -= 0.5;
    
}
console.log();
console.log("ODD NUMBERS");
//Part 2. Print all the odd numbers between 1 - 100.
let oddNumbers = 0;
while (oddNumbers < 100){

    if (oddNumbers % 2 != 0){
        console.log(oddNumbers);
    }
    oddNumbers = oddNumbers + 1;
}

//Part 3. - Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]

function loop(){
let n = 1;
while(n < 6){
    
    console.log("["+n+"]");
    n++;
}
}
loop();


//Part 4. Write a method with a while loop that computes the sum of first n positive integers: 
//sum = 1 + 2 + 3 + … + n
//Examples:
//n = 5 sum = 15
//n = 19 sum = 190


function sum(){
let n = parseInt(prompt("Introduce un numero positivo entero"));
let sum = 0;
let i = 1;
while(i<=n){
    sum = sum + i;
    i++;
}
console.log(" sum =" + sum);
}
sum();