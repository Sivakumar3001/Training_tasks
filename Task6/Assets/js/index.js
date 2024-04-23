function validate() {
    let input=document.getElementById("areas").value;
    let fault=document.getElementById("fault");
    let solution=document.getElementById("solution");
    if (input==="") {
        fault.innerHTML="Please enter a sentence";
        solution.innerHTML="";
        return;
    } if (/['!@#$%^&*()_+\=\[\]{};':"\\<>\/?~]/g.test(input)) {
        fault.innerHTML="Special Character(s) not allowed";
        solution.innerHTML="";
        return;
    } if (/[0-9]/.test(input)) {
        fault.innerHTML="Number(s) not allowed";
        solution.innerHTML="";
        return;
    } if (input.length>1) {
        fault.innerHTML="Please enter only one word";
        solution.innerHTML="";
        return;
    } if (input=='a'|| input=='e'||input=='i'||input=='o'||input=='u'||input=='A'||input=='E'||input=='I'||input=='O'||input=='U') {
        fault.innerHTML="";
        solution.innerHTML=input+" is a vowel"; 
    } else {
        fault.innerHTML="";
        solution.innerText=input+" is a constent";
    }
}
function resetAll(){
    fault.innerHTML="";
    solution.innerHTML="";
    document.getElementById("areas").value="";
}