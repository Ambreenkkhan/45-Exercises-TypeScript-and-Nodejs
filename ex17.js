// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let invitationList = [
    "Ali",
    "Islamuddin",
    "Azaan",
    "Muhammad",
    "Wajid",
    "Abdul Hadi",
];
console.log("\nUnfortunately! We don't have a big table for dinner, Now we can invite only two guests.\n");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (invitationList.length > 2) {
    let notInvited = invitationList.pop();
    console.log(`Dear Mr. ${notInvited} sorry! We don't have a big table, We can't invite you for dinner.\n`);
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < invitationList.length; i++) {
    console.log(`Dear Mr.${invitationList[i]}: You are still invited for dinner.\n`);
}
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
invitationList.pop();
invitationList.pop();
console.log(invitationList);
export {};
