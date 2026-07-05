// 3. Even or Odd: Write a conditional block that checks if a single integer input is even or odd without using loops.


function test(Char){
    let n = 10; 
    for(let i = 1; i<= n; i++){
        if(Char%2 === 0){
            console.log("even")
        } else {
            console.log("odd")
        }
    }
}

test(10);

