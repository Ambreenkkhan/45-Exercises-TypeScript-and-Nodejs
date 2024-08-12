// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "amBrEen";
console.log(`Person name in lowercase: "${personName.toLowerCase()}"`);
console.log(`Person name in uppercase: "${personName.toUpperCase()}"`);
console.log(`person name in titlecase: "${personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()}"`);
export {};
