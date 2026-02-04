
let ppppp =  "../../type/data/data.js";

window.ppppp = ppppp;
function eetoaa(str) {
  try{

     return btoa(
       encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
       (_, p1) => String.fromCharCode('0x' + p1)
      ));

    }catch(e){
      alert("error" + e.message);
    }
}

Window.AATOEE = function(str) {
   return decodeURIComponent(
     Array.prototype.map
      .call(atob(str), c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('')
   );
}

Window.newVer = function(text, ppppp) {
    try{
     let result = "";
     for (let i = 0; i < text.length; i++) {
       result += String.fromCharCode(
         text.charCodeAt(i) ^ ppppp.charCodeAt(i % ppppp.length)
       );
     }
     return result;
   } catch (e) {
     alert("error"+ e.message);
   }
 
}
 

