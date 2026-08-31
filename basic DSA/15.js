//   5. Convert Case Manually: 
// Convert a lowercase string to uppercase without using built-in language methods like .toUpperCase().


function toUpperConvert(str){
let result = "";
  for(let i = 0; i < str.length; i++){
    let code = str[i].charCodeAt(0);
    let upper = String.fromCharCode(code-32);
    result+= upper
  }
return result;
}
   console.log(toUpperConvert("hello"));
