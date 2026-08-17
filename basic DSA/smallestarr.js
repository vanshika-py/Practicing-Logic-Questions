let arr = [4,3,1,2]

let smallest = arr[0];


// for(let i = 1; i < arr.length; i++){
//    let num = arr[i]


//    for(let j = 1; j = arr.length; j++){
//    let sol =  num < arr[j]
//     smallest = sol
//    }
// }
// console.log(smallest)


for(let i = 1; i < arr.length; i++){
   if( arr[i] > smallest){
    smallest = arr[i]
}

console.log(smallest)