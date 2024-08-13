// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Test for equality
console.log("Equality test with strings: ", "Ambreen" === "Ambreen");
console.log("Equality test with strings: ", "Ambreen" !== "Ambreen");
// • Test for Inequality
console.log("Inequality test with strings: ", "Ambreen" != "Ali");
console.log("Inequality test with strings: ", "Ambreen" == "Ali");
// • Tests using the lower case function
console.log("Lower Case Function Test: ", "AMBREEN".toLowerCase() === "ambreen");
console.log("Lower Case Function Test: ", "AMBREEN".toLowerCase() === "Ambreen");
// • Numerical tests involving equality  and inequality
console.log("Equality test with numbers: ", 2 === 2);
console.log("Equality test with numbers: ", 2 === 3);
console.log("Inquality test with numbers: ", 2 != 23);
console.log("Inquality test with numbers: ", 2 === 23);
// • Numerical tests greater than and less than, greater than or equal to, and less than or equal to
console.log("Greater than test: ", 5 > 4);
console.log("Greater than test: ", 5 > 6);
console.log("Less than test: ", 4 < 5);
console.log("Less than test: ", 3 > 4);
console.log("Greater than and equal to test: ", 5 >= 5);
console.log("Greater than and equal to test: ", 2 >= 3);
console.log("Less than and equal to test: ", 4 <= 5);
console.log("Less than and equal to test: ", 4 <= 5);
// • Tests using "and" and "or" operators
console.log("And Operator Test: ", 12 === 12 && 13 > 12);
console.log("And Operator Test: ", 12 === 12 && 11 > 12);
console.log("Or Operator Test: ", 12 === 12 || false);
console.log("Or Operator Test: ", 12 !== 12 || false);
// • Test whether an item is in a array
let menu = ["Singaporean Rice", "Charga", "Chicken Handi"];
console.log('Test "Charga" in the array: ', menu.includes("Charga"));
console.log('Test "Charga" in the array: ', menu.includes("Chargaa"));
// • Test whether an item is not in a array
console.log('Test "Biryani" is not in the array: ', !menu.includes("Biryani"));
console.log('Test "Biryani" is not in the array: ', menu.includes("Biryani"));
export {};
