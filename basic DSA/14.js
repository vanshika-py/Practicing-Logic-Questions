// 14. Find First Occurrence:
// Return the index of the very first time a specific character appears in a string.
//  Return -1 if not found.



// let str = "vanshika";



// function find(target){
// for(let i = 0; i < str.length; i++){
//     if(str[i] === target){
//         return i;
//     } 
//     console.log(find("s"));
// }
// return -1;
// }

 function find(str, target){
    for(let i = 0; i < str.length; i++){
        if(str[i] === target)
            return i
    }
     return -1 
   }
 

  console.log(find("vanshina", "p"));