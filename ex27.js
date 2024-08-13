// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColors = "green"; // 1st Version
if (alienColors === "green") {
    console.log("1st Version of Program: Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
alienColors = "yellow"; // 2nd version
if (alienColors === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("2nd Version of Program: Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
alienColors = "red"; // 3rd version
if (alienColors === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("3rd Version of Program: Player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
export {};
