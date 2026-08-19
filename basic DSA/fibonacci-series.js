//upto 10 terms//
let a = 0;
let b = 1;

console.log(a);
console.log(b);


for(i = 2; i <= 10; i++){
    let c = a+b;
    console.log(c);
    let temp = b;
    b = c; 
    a = temp;
}