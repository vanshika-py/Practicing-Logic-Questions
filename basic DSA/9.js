// 9. Find All Factors: Find and print every integer that divides a given number $N$ perfectly without leaving a remainder.

let n = 10;

for(let i = 1; i <= n; i++){
   if(n%i === 0){
console.log(i)
}
}