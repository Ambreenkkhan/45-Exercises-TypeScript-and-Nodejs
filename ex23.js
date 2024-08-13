// 23. Conditional Tests: Write a series of conditional tests.
let car = 'subaru';
console.log("Is car === 'subaru'? I predict True."); //TEST 1
console.log(car === 'subaru');
console.log("Is car == 'subaru'? I predict True."); //TEST 2
console.log(car == 'subaru');
console.log("Is car != 'Honda'? I predict True."); //TEST 3
console.log(car != 'Honda');
console.log("Is car !== 'ford'? I predict True."); //TEST 4
console.log(car !== 'ford');
console.log("Is car.Upper case  == 'SUBARU'? I predict True."); //TEST 5
console.log(car.toUpperCase() == 'SUBARU');
console.log("Is car.Lower case  == 'SUBARU'? I predict False."); //TEST 6
console.log(car.toLowerCase() == 'SUBARU');
console.log("Is car  === 'SUBARU'? I predict False."); //TEST 7
console.log(car === 'SUBARU');
console.log("Is car  === 'Truck'? I predict False."); //TEST 8
console.log(car === 'Truck');
console.log("Is car  === 'Plane'? I predict False."); //TEST 9
console.log(car === 'plane');
console.log("Is car  === 'Toy car'? I predict False."); //TEST 10
console.log(car === 'Toy car');
export {};
