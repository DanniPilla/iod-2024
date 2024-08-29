//1

function gandalf (str){
  
   let newString="";
   let words = str.split(" ");

   for (let word of words) {
   if (newString.length != 0) {
   newString += " ";
 }
 newString += word.charAt(0).toUpperCase() + word.substring(1);
}
return newString;
}
let str = "Oh... you would not part an old man from his walking stick?"
console.log (gandalf(str));

//2

