function LargestNumber() {
    let input=document.getElementById('area').value;
    let trimInput=input.trim();
    let replaceInput=trimInput.replace(/\s+/g, "");
    let replaceInput1=replaceInput.replace(/,+/g,',');
    if(replaceInput1.startsWith(",")) {
        replaceInput1=replaceInput1.slice(1);
    };
    let number=replaceInput1.split(",");
    let firstNumber=Number(number[0])
    let secondNumber=Number(number[1])
    const specialCharacters=/['!@#$%^&*()_+\=\[\]{};':"\\<>\/?~]/;
    const characters=(/[a-zA-Z]/);
    let testNumber=specialCharacters.test(number);
    let testreplaceInput=characters.test(replaceInput1);
    if(input===""|| input===null) {
        document.getElementById("result").innerHTML="";
        document.getElementById("result").innerHTML="Please enter a number";
    } else if (testNumber==true) {
        document.getElementById("result").innerHTML="";
        document.getElementById("result").innerHTML="Special Character(s) not allowed";
    } else if(testreplaceInput==true) {
        document.getElementById("result").innerHTML="";
        document.getElementById("result").innerHTML="Letter(s) not allowed";
    } else if(firstNumber==secondNumber) {
        document.getElementById("result").innerHTML="";
        document.getElementById("result").innerHTML="Both numbers are same";
    } else if(number.length===1|| number[1]==="") {
        document.getElementById("result").innerHTML="";
        document.getElementById("result").innerHTML="Please enter another number";
    } else {
        document.getElementById("result").innerHTML="";
        let maximum=large(firstNumber,secondNumber)
        document.getElementById("result").innerHTML="The largest number is :"+ maximum;
    }
}

function large(value1,value2) {
    if (value1 > value2)
    return value1;
    else 
    return value2;
}

function resetValue() {
    document.getElementById("area").value="";
    document.getElementById("result").innerHTML="";
}