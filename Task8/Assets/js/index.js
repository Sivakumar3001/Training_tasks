function validate() {
    let str=document.getElementById("area").value;
    let str1 =str.trim();
    let len=str1.length;
    const revArray =[];
    const length = str1.length - 1;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let res=specialChars.test(str1);
    if (str===""||str===null) {
      document.getElementById("fault").innerHTML="Please enter a sentence";
      document.getElementById("result").innerHTML="";
    } else if (res===true) {
      document.getElementById("fault").innerHTML="Special Character(s) not allowed";
      document.getElementById("result").innerHTML="";
    } else if (len<2) {
      document.getElementById("fault").innerHTML="Please enter more than one character";
      document.getElementById("result").innerHTML="";
    } else {
      for(let i = length; i >= 0; i--) {
      revArray.push(str1[i]);
      }
      let revStr=revArray.join();
      let revStr1 = revStr.split(',').join("");
      let revStr2=revStr1.replace(/\s+/g," ");
      document.getElementById("result").innerHTML="Reverse string of given input  :"+revStr2;
      document.getElementById("fault").innerHTML="";
  }
}
function resetAll() {
      document.getElementById("area").value = "";
      document.getElementById("result").innerHTML="";
      document.getElementById("fault").innerHTML="";
  }
  