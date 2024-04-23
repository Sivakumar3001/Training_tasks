function validate() {
    let str  = document.getElementById("area").value;
    let str1 =str.trim();
    let str2 =str1.replace(/\s+/g,"");
    let len  =str2.length;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numbers=(/[0-9]/);
    let result   =specialChars.test(str2);
    let numResult=numbers.test(str2);
    if(str===""||str===null) {
      document.getElementById("fault").innerHTML=""
      document.getElementById("fault").innerHTML="Please enter a sentence";
      document.getElementById("result").innerHTML=""
    } else if (result===true) {
      document.getElementById("fault").innerHTML=""
      document.getElementById("fault").innerHTML="Special Character(s) not allowed";
      document.getElementById("result").innerHTML=""
    } else if (numResult===true) {
      document.getElementById("fault").innerHTML=""
      document.getElementById("fault").innerHTML="Number(s) not allowed";
      document.getElementById("result").innerHTML=""
    } else if (len<2) {
      document.getElementById("fault").innerHTML=""
      document.getElementById("fault").innerHTML="Please enter more than one character";
      document.getElementById("result").innerHTML=""
    } else if (str2[0]===str2[len-1]) {
      document.getElementById("fault").innerHTML=""
      document.getElementById("result").innerHTML=""
      document.getElementById("result").innerHTML="both the characters are same.";
    } else {
      document.getElementById("fault").innerHTML=""
      document.getElementById("fault").innerHTML="both the characters are not same";
      document.getElementById("result").innerHTML=""
    }
  }
  function resetAll() {
      document.getElementById("area").value = "";
      document.getElementById("fault").innerHTML="";
      document.getElementById("result").innerHTML="";
  }