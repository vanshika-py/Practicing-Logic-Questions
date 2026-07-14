// 1. Length of a String: Calculate the total number of characters in a string without using the built-in .length property.

let str = "Hello";
let i = 0; 
let count = 0; 
while(str[i] != undefined){
  count++
  i++
}
console.log(count);


