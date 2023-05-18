// "Object/Array" how 'reference" are passed to variable

let arr = [1, 2, 3, 4, 5, 6];

let getRef = arr;
getRef[6] = 7;

getRef.shift();

console.log({ arr });
console.log({ getRef });

// pass by value

let getValue = [...arr];
getValue[6] = 8;
console.log({ arr });
console.log({ getValue });

// for in loop

let car = {
  Make: "Toyota",
  Model: "Camry",
  Year: 2022,
  Color: "Silver",
};

console.log(car);

let x = "";
for (let key in car) {
  x = x + car[key];
}
console.log(x);
