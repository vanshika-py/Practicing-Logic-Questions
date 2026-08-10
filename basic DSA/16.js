// String Reversal: Take a string and return its characters completely backwards using a secondary storage variable.

//    function back(str){
//    for(let i = str.length - 1; i >= 0;  i--){
//    let newStr =  str[i];
//     return str[i]
//    }
// }
//     console.log(back("hello"))


   let str = "hello";
   let newStr = "";

   for(let i = str.length - 1; i >= 0; i--){
      newStr =  newStr + str[i]
   }
       console.log(newStr);
   