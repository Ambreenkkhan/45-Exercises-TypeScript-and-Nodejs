// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// TASK:
// 1- Store the locations in a array. Make sure the array is not in alphabetical order.
import chalk from "chalk";

let places: string[] = [
  "Saudia Arabia",
  "Itlay ",
  "Maldives",
  "France",
  "Germany",
];
// 2- Print your array in its original order.

console.log(chalk.magentaBright(`Array in its original order: ${places}.`));

// 3- Print array in alphabetical order without modifying the actual list.

console.log(
  chalk.blueBright(`Array in alphabetical order:\n${[...places].sort()}.`)
);

// 4- Show that array is still in its original order by printing it.

console.log(chalk.green(`Array is still in its original order: ${places}.`));

// 5- Print array in reverse alphabetical order without changing the order of the original list.

console.log(
  chalk.yellow(
    `array in reverse alphabetical order: ${[...places].sort().reverse()}.`
  )
);

// 6- Show that array is still in its original order by printing it again.

console.log(chalk.magenta(`Array is still in its original order: ${places}.`));

// 7- Reverse the order of your list. Print the array to show that its order has changed.

console.log(chalk.red(`List in reverse order: ${places.reverse()}.`));

// 8- Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log(`List in its original order: ${places.reverse()}.`);

// 9- Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log(chalk.blue(`List stored in alphabetical order: ${places.sort()}.`));

// 10- Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log(
  chalk.greenBright(
    `List stored in reverse alphabetical order: ${places.sort().reverse()}.`
  )
);
