function addRemove(){
  var input=document.getElementById("area").value;
  var positionValidation=document.getElementById("areaTwo").value;
  var position=Number(document.getElementById("areaTwo").value);
  var replaceStr=document.getElementById("areaThree").value;
  var areaThreeNegative=Number(document.getElementById("areaThree").value);
  var trimInput =input.trim();
  var replaceInput1 = trimInput.replace(/[,,]+/g,",").replace(/["  "]+/g,"");
  if(replaceInput1.startsWith(",")) {
    replaceInput1=replaceInput1.slice(1);
};
if(replaceInput1.endsWith(",")) {
    replaceInput1=replaceInput1.slice(0,-1);
};
  var arr = replaceInput1.split(",");
  var specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|.<>\/?~]/;
  var characters=(/[A-Za-z]/);
  var testPositionInput=characters.test(position);
  var arrTest=specialChars.test(arr);
  var positionValidationTest=specialChars.test(positionValidation);
  var replaceStrTest=specialChars.test(replaceStr);
    if(input===""){
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("result").innerHTML="Please fill the all input fields";
    }
    else if(positionValidation===""){
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultOne").innerHTML="Please fill the all input fields";
    }
    else if(replaceStr===""){
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultTwo").innerHTML="Please fill the all input fields";
    }
    else if(arr[0]<0 || arr[1]<0) {
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("result").innerHTML="positive number only allowed";
    }
    else if( position<0) {
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultOne").innerHTML="positive number only allowed";
    }
    else if( position===0 ) {
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultOne").innerHTML="Not accepted 0th position.";
    }
    else if(areaThreeNegative<0) {
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultTwo").innerHTML="positive number only allowed";
    }
    else if(arrTest===true||arr[0]===""){
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("result").innerHTML="Special Character(s) not allowed";
    }
    else if(positionValidationTest===true){
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultOne").innerHTML="Special Character(s) not allowed";
    }
    else if(replaceStrTest===true){
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultTwo").innerHTML="Special Character(s) not allowed";
    }

    else if( testPositionInput===true){
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
     document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultOne").innerHTML="letter(s) not allowed in a position";
    }
    else if(arr.length===1)
    {
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("result").innerHTML="Single string is not allowed as input(Input should be in A,B,C,D format)";
    }
    else if(arr.length<position)
    {
      document.getElementById("result").innerHTML="";
      document.getElementById("resultOne").innerHTML="";
      document.getElementById("resultTwo").innerHTML="";
      document.getElementById("resultOne").innerHTML="Enter position between 1 "+" to "+arr.length;
    }
    else{
    let ans = arr.splice(position-1,1,replaceStr);
    document.getElementById("result").innerHTML="";
    document.getElementById("resultOne").innerHTML="";
    document.getElementById("resultTwo").innerHTML="";
    document.getElementById("resultTwo").innerHTML="New Array: "+arr;
    }
}
function resetAll(){
document.getElementById("area").value = "";
document.getElementById("areaTwo").value = "";
document.getElementById("areaThree").value = "";
document.getElementById("result").innerHTML="";
document.getElementById("resultOne").innerHTML="";
document.getElementById("resultTwo").innerHTML="";
}
