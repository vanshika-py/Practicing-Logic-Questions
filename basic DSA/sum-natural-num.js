
let n = -10;

if(isNaN(n)){
    console.log("Invalid Input")
} else{
    if(n > 0){
        let sum = 0;
        for(let i = 1; i <= n; i++){
            sum += i
        }
    
    console.log(sum);
    }

else {
    console.log("n must be greater than 0  and positive");
}
}
