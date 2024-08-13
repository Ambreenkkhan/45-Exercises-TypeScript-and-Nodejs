/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
let invitationList = ["Azaan", "Bisma", "Islamuddin"];
//console.log(invitationList);
console.log("We found a bigger dinner table!");
//Add one new guest to the beginning of array.
invitationList.unshift("Ali");
//• Add one new guest to the middle of your array.
invitationList.splice(2, 0, "Muhammad");
// //• Add one new guest to the end of your list.
invitationList.push("Abdul Hadi");
//• Print a new set of invitation messages, one for each person in your list.
// New invitations
invitationList.forEach((invitationList) => {
    console.log(`Dear ${invitationList}! would you like to have dinner with me?`);
});
export {};
