function sayHello(name, age){
    console.log("Hello! my name is "+name+", "+age);
}

sayHello("Kim", 19);
sayHello("Dal", 20);
sayHello("lynn", 21);

function plus(a, b){
    console.log(a + b); // NaN == Not a Number
}
function divide(a, b){
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);



const player = {
    name:"nico",
    sayHello : function(name){
        console.log("hello! my name is "+name+" nice to meet you")
    }
}

console.log(player.name);
player.sayHello("kim");
player.sayHello("lynn");

const calculator = {
    sum : function(a, b){
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    divide : function(a, b){
        return a / b;
    },
    multi : function(a, b){
        return a * b;
    }
}

calculator.sum(8, 6);
calculator.minus(8, 6);
calculator.divide(8, 6);
calculator.multi(8, 6);

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner+2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const sumReturn = calculator.sum(2, 3);
const minusReturn = calculator.minus(sumReturn, 3);
const divideReturn = calculator.divide(2, minusReturn);
const multiReturn = calculator.multi(divideReturn, minusReturn);

console.log(sumReturn);
console.log(minusReturn);
console.log(divideReturn);
console.log(multiReturn);