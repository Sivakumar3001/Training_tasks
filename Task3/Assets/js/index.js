function sumofNumber() {
    let input=document.getElementById('area').value;
    let trimInput=input.trim();
    let replaceInput=trimInput.replace(/\s+/g, "");
    let replaceInput1=replaceInput.replace(/,+/g,',');
    if(replaceInput1.startsWith(",")) {
        replaceInput1=replaceInput1.slice(1);
    };
    if(replaceInput1.endsWith(",")) {
        replaceInput1=replaceInput1.slice(0,-1);
    };
    let number=replaceInput1.split(",");
    const specialCharacters=/['!@#$%^&*()_+\=\[\]{};':"\\<>\/?~]/;
    const characters=(/[a-zA-Z]/);
    let testNumber=specialCharacters.test(number);
    let testreplaceInput=characters.test(replaceInput1);
    if(input===""|| input===null) {
        document.getElementById("result").innerHTML="Please enter a number";
        document.getElementById("output").value="";
    } else if (testNumber==true) {
        document.getElementById("result").innerHTML="Special Character(s) not allowed";
        document.getElementById("output").value="";
    } else if(testreplaceInput==true) {
        document.getElementById("result").innerHTML="Letter(s) not allowed";
        document.getElementById("output").value="";
    } else if(number.length===1|| number[1]==="") {
        document.getElementById("result").innerHTML="Please enter another number";
        document.getElementById("output").value="";
    } else {    
        let sum=0;
        for(var i=0;i<number.length;i++){
            sum+=Number(number[i]);
        }
         document.getElementById("output").value=String(sum);
         document.getElementById("result").innerHTML="";  
    } 
}
function productofNumber(){
    let input=document.getElementById('area').value;
    let trimInput=input.trim();
    let replaceInput=trimInput.replace(/\s+/g, "");
    let replaceInput1=replaceInput.replace(/,+/g,',');
    if(replaceInput1.startsWith(",")){
        replaceInput1=replaceInput1.slice(1);
    };
    if(replaceInput1.endsWith(",")){
        replaceInput1=replaceInput1.slice(0,-1);
    };
    let number=replaceInput1.split(',');
    const specialCharacters=/['!@#$%^&*()_+\=\[\]{};':"\\<>\/?~]/;
    const characters=(/[a-zA-Z]/);
    let testNumber=specialCharacters.test(number);
    let testreplaceInput=characters.test(replaceInput1);
    if(input===""|| input===null) {
        document.getElementById("result").innerHTML="Please enter a number";
        document.getElementById("output").value="";
    } else if (testNumber==true) {
        document.getElementById("result").innerHTML="Special Character(s) not allowed";
        document.getElementById("output").value="";
    } else if(testreplaceInput==true) {
        document.getElementById("result").innerHTML="Letter(s) not allowed";
        document.getElementById("output").value="";
    } else if(number.length===1|| number[1]==="") {
        document.getElementById("result").innerHTML="Please enter another number";
        document.getElementById("output").value="";
    }
    else{
        let product=1;
    for(var i=0;i<number.length;i++){
        product*=Number(number[i]);
    }
        document.getElementById("output").value=String(product);
        document.getElementById("result").innerHTML="";
   }
}
