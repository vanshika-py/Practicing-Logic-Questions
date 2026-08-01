let arr = [10, 4, 16, 17, 5];


// find the largest number in an Array.


// input = array of numbers
// output largest numbers

// assume large thn compare


let largest = arr[0];

 
// let len= arr.length;
// console.log(len);

for(let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
    largest = arr[i]
}
}
console.log(largest);