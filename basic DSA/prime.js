let n = 11; 

if(isNaN(n)){
    console.log("Invalid input")
} else {
   
    if(n > 0){
         let primeNum = true;
    for(let i = 2; i <= Math.floor(n/2); i++){
               if(n%i === 0){
               primeNum = false;
            break;
               }
    }
    console.log(primeNum);
}

else{
    console.log("number should be +ve and greater than 0")
}
}