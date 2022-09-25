
// Variables

var a = 10;
console.log(a);

let variable = "Aayush";
console.log(variable);

const c = 100;
console.log(c);

let favourite = "Kohli"; //Strings
console.log(favourite);
let boolean = true; //Boolean
console.log(boolean);

let array = ["Kohli", "Dhoni", 15];
console.log(array);

let Dict = { Playername: "Virat", Playersurname: "Kohli" }; //Dictionary
console.log(Dict);
console.log(Dict.Playername);

//Functions

function add() {
  let x = 15;
  let y = 30;
  add = x + y;
  return add;
}

summation = add();
console.log(summation);

var sum = (x, y) => {
  return x + y;
};

let s = sum(14, 33);

console.log(s);

let age = 30;

if (age < 30) {
  console.log("middle age");
} else if (age < 20) {
  console.log("young age");
} else {
  console.log("old age");
}



// Loops
// SUm of first 10 natural numbers
let j = 1;
let nsum = 0;
for (j = 1; j <= 10; j++) {
  nsum = nsum + j;
  console.log(j);
}

console.log("The Sum is:", nsum);