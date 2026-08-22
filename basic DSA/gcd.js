//find the gcd of given 2 integers///


//find the gcd of 48 and 18// output = 6

let a = 80;  

let b = 20;

 // remainder//   12, 18%12 = 6, 0
 let c = a%b;  


while (c !== 0){
     // remainder//   12, 18%12 = 6, 0
  let temp  = b; 
    b = c; 
    a = temp; 
   c =  a%b;

} 

console.log(b);

/*
step 1: check a%b = c loop will run 
step c = b 




*/

/*
a = 48; 
b = 18;  
c= a%b;

step 1: a = 48 b = 18 = c //12

step 2 : a = 18 ; b = 12  c= 6

step 3: a = 12, b = 6;  c = 0;


loop will terminate at c = 0 hcf = b








*/