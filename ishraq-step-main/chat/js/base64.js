function base64EncodeUtf8(str) {
  try{

     return btoa(
       encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
       (_, p1) => String.fromCharCode('0x' + p1)
      ));

    }catch(e){
      alert("error" + e.message);
    }
}

function base64DecodeUtf8(str) {
   return decodeURIComponent(
     Array.prototype.map
      .call(atob(str), c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('')
   );
}

function xorProcess(text, password) {
    try{
     let result = "";
     for (let i = 0; i < text.length; i++) {
       result += String.fromCharCode(
         text.charCodeAt(i) ^ password.charCodeAt(i % password.length)
       );
     }
     return result;
   } catch (e) {
     alert("error"+ e.message);
   }    
 
}

   // base64EncodeUtf8(xorProcess(text, password)) للتشفير
   // xorProcess(base64DecodeUtf8(text), password)  لفك التشفير

