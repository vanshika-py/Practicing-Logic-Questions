

let n = 4;; 


if(isNaN(n)){
    console.log("Invalid Input")
} else {
    if(n > 0){
    let factor = 5; 
    for(let i = 1; i <= n; i++){
        factor*=i
    }
    console.log(factor);
}
 else {
    console.log("number should be greater than 0 and +ve");
}
}
