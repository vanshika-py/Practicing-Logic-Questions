//  Power of a Number: Calculate $A$ raised to the power of $B$ ($A^B$) using a basic sequential multiplication loop

// let a  = 10;
// let b = 3; 
// let result = 1; 
    
// for(let i = 1; i <= b; i++){
//      result*= a   
// }
// console.log(result)



let result = 1; 


function power(a,b){
    for(let i = 1; i <= b; i++){
        result*= a
    }
    console.log(result)
}

power(10,3);




// let  a = 2; 

// let b = 3; 


// console.log(a**b);


// 8.js
