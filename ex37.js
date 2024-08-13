// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size = 'Large', text = 'I love TypeScript') {
    console.log(`Print a "${size}" size T-Shirt with the text "${text}".`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'I Love to be a good Developer');
make_shirt('X-Large', 'ALI');
export {};
