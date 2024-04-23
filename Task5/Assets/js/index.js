function validate() {
    let str = document.getElementById("area").value
    let str1=str.trim();
    let str2=str1.replace(/\s+/g, " ");
    let strArr = str2.split(" ");
    let min = max = strArr[0];
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let res=specialChars.test(str);
   if(strArr==""||strArr==null) {
      document.getElementById("minValue").innerHTML = "";
      document.getElementById("maxValue").innerHTML = "";
      document.getElementById("validation").innerHTML="Please Enter a sentence"
   } else if(res===true) {
      document.getElementById("minValue").innerHTML = "";
      document.getElementById("maxValue").innerHTML = "";
      document.getElementById("validation").innerHTML="Special Characters not Allowed"   
   }
   else if(strArr.length===1){
      document.getElementById("minValue").innerHTML = "";
      document.getElementById("maxValue").innerHTML = "";
      document.getElementById("validation").innerHTML="Please enter a sentence which has more than one word"
   } else {
       for(let i = 1; i < strArr.length; i++)
       {
           if(strArr[i].length < min.length)
           {
              min = strArr[i];
           };
           if(strArr[i].length > max.length)
           {
              max = strArr[i];
           }; 
       };
       if(min.length===max.length){
         document.getElementById("minValue").innerHTML = "";
         document.getElementById("maxValue").innerHTML = "";
         document.getElementById("validation").innerHTML="All words are equal in length"
      } else{
       document.getElementById("validation").innerHTML = "";
       document.getElementById("minValue").innerHTML="Smallest String :"+min;
       document.getElementById("maxValue").innerHTML="Largest String :"+max;
       }
   } 
}
function resetAll(){
   document.getElementById("area").value='';
   document.getElementById("minValue").innerHTML = '';
   document.getElementById("maxValue").innerHTML = '';
   document.getElementById("validation").innerHTML = '';
}