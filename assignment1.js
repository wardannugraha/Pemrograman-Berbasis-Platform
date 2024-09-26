console.log("Result A : \n");

console.log('Hello');
console.log("John");
console.log('you can call me "Santuy"');
console.log("go away, I'm Coding");
console.log('I am Sorry\nplease forgive me');

//b
console.log("\nResult B :\n");

let number1 = 3;
let number2 = 9;
let number3 = 7;
let number4 = 6;
let number5 = 2;
console.log(number1 + number2 - number3 * number4 / number5); 
console.log(number1 + (number2 - number3) * number4 / number5);

//c
console.log("\nResult C :\n");

let conditionA = true;
let conditionB = false;
let conditionC = true;
let conditionD = false;
console.log(conditionA && conditionB || conditionC && !conditionD);

//d
console.log("\nResult D :\n");

let age = 9;
let result = (age > 17) ? "Adults" : (age > 10) ? "Teenagers" : "Children";
console.log(result);

//e
console.log("\nResult E :\n");

let numA = 176;
let numB = 103;

console.log(numA & numB);
console.log(numA | numB);
console.log(numA ^ numB);
console.log(numA >> 2);
console.log(numB >> 2);
console.log(numA << 2);
console.log(numB << 2);

let numC = 1 ;
console.log(numC << 1);
console.log(numC << 2);
console.log(numC << 3);
console.log(numC << 4);
console.log(numC << 5);
console.log(numC << 6);
console.log(numC << 7);
console.log(numC << 8);

// f
console.log("\nResult F :\n");

let fullname = (fn,mn,ln) => {
    return `${fn} ${mn} ${ln}, ${getTitle()}`;
}

let getTitle = () =>{
    return "B.Sc"
}

console.log(fullname("John","Dream","Myung"))

//g
console.log("\nResult g :\n");

// 1. Operator == (Loose Equality):
console.log(5 == '5');  // true (the number 5 and string '5' are considered equal)
console.log(true == 1); // true (boolean true is considered as 1)
console.log(false == 0); // true (boolean false is considered as 0)

// 2. Operator === (Strict Equality):

console.log(5 === '5');  // false (number and string are different types)
console.log(true === 1); // false (boolean and number are different types)
console.log(false === 0); // false (boolean and number are different types)
